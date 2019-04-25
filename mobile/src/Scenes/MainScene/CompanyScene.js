import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ErrorScene, UserList, CompanyProfile } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const query = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      color
      name
      image
      employees {
        id
        name
        color
        image
        email
      }
    }
  }
`;

export default class CompanyScene extends PureComponent {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    // todo: 2. would be really cool to show the company info here.
    // todo: 3. would be extra cool to show the employee list and make it navigate to that user on tap.
    return (
      <View style={styles.container}>
        <Query query={query} variables={{id: id}}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              console.log(error);
              return <ErrorScene message={error.message} />;
            }

            console.log(data.company);
            return (
              <CompanyProfile 
                company={data.company}
                navigation={navigation}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}
