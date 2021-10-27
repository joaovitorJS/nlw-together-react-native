import React, { useCallback, useState } from "react";
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect, RouteProp } from "@react-navigation/native";

import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/RootStackParams";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";


type HomeNavigateProp = StackNavigationProp<RootStackParamList ,'Home'>

export function Home() {
  const navigation = useNavigation<HomeNavigateProp>();
  
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  const [appointments, setAppointments] = useState<AppointmentProps[]>([]); 
  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointment() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
    
    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);

  }
  
  useFocusEffect(useCallback(()=> {
    loadAppointment()
  }, [category]))
  

  return (
    <Background>
      <View style={styles.header}> 
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

     
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading 
        ? <Load />
        : <>
            <ListHeader 
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
            

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment 
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 70}}
            />
          </>
      }
      
      </Background>
  );
}

/**
 * FlatList é mais indicada quando tem muitos elementos a serem renderizados, 
 * é mais performática que a ScrollView  
 * */ 