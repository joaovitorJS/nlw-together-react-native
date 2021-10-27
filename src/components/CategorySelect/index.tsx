import React from "react";
import { ScrollView } from 'react-native';
import { categories } from "../../utils/categories";

import { Category } from '../Category';
import { styles } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({ 
  categorySelected, 
  setCategory, 
  hasCheckBox = false
}: Props) {
  return (
 
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(({id, title, icon}) => (
          <Category
            key={id} 
            title={title}
            icon={icon}
            checked={id === categorySelected}
            onPress={ () => setCategory(id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }

    </ScrollView>

  );
}