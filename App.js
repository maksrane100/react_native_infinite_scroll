import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
//import Profile from './components/Profile';
import Profile1 from './components/Profile1';
import Profile2 from './components/Profile2';
import InfiniteScroll from './components/InfiniteScroll';
import InfiniteScroll1 from './components/InfiniteScroll1';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>

          
          <InfiniteScroll1 />
      </View>
    );
  }
}

const dummyProfile = {
        "about_details": {
            "about_myself": "I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai.",
            "birthdate": "1988-01-01T23:28:56.782Z",
            "spoken_languages": [],
            "photos": [],
            "looking_for_details": "I am looking for a good girl.",
            "interests": [],
            "education_details": "master of science",
            "undergraduate_degree": "B.Tech.",
            "graduate_degree": "M.Tech.",
            "undergraduate_institute_details": "Institute of Education",
            "graduate_institute_details": "Institute of Education",
            "occupation_details": "software engineer",
            "employment": "Private Job",
            "gotra": "",
            "work_location_city": "Mumbai",
            "work_location_country": "India",
            "salary_details": "20 Lac",
            "food_habits": "",
            "drinking_habits": "",
            "smoking_habits": "",
            "health_issues": "",
            "food_liking": [],
            "gender": "Male",
            "age": 24,
            "hobbies": [
                "movies"
            ],
            "education_institute_details": "Test University",
            "marital_status": "Never Married"
        },
        "family_details": {
            "about_family": "I come from well educated family.",
            "father_occupation": "engineer",
            "mother_occupation": "housewife",
            "family_location_city": "Mumbai",
            "father": "Retired",
            "mother": "Retired",
            "no_of_brothers": 0,
            "no_of_sisters": 2
        },
        "religion_details": {
            "religion": "Hindu",
            "caste": "Brahmin",
            "sub_caste": "Brahmin"
        },
        "address_details": {
            "address1": "1234 Big Bazaar Road",
            "address2": "Near Big Circle",
            "city": "Delhi",
            "state": "Delhi",
            "zip": "10001",
            "country": "IN"
        },
        "contact_details": {
            "primary_email": "NitinNew@test.com",
            "secondary_email": "NitinNew1@test.com",
            "phone_no_area_code": "",
            "phone_no": "9020202020"
        },
        "creationdate": "2020-01-20T19:30:45.321Z",
        "modificationdate": "2020-01-20T19:30:45.321Z",
        "profile_verified": false,
        "profile_status": "Active",
        "_id": "5da954af0786c33250a9117a",
        "profile_active": true,
		 "images": [
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
        "user_id": {
            "birthdate": "1988-01-01T23:28:56.782Z",
            "creationdate": "2019-01-01T23:28:56.782Z",
            "modificationdate": "2019-10-17T06:48:27.250Z",
            "deactivationdate": "2019-10-17T06:48:27.250Z",
            "security_question": "City where you did your first job?",
            "membership_details": {
                "membershipFromDate": "2019-10-17T06:48:27.251Z",
                "membershipToDate": "2019-10-17T06:48:27.251Z",
                "price": 29.99,
                "membershipType": "3 Months Classic"
            },
            "active": true,
            "_id": "5da80ebbb9308e53842186f6",
            "firstname": "Nitin",
            "lastname": "Patil",
            "password": "Nitin",
            "email": "nitin@test.com",
            "age": 30,
            "source": "Internet",
            "security_answer": "Mumbai",
            "__v": 0
        },
        "__v": 0
    };



const profiles = 
[
{
        "about_details": {
            "about_myself": "I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai.",
            "birthdate": "1988-01-01T23:28:56.782Z",
            "spoken_languages": [],
            "photos": [],
            "looking_for_details": "I am looking for a good girl.",
            "interests": [],
            "education_details": "master of science",
            "undergraduate_degree": "B.Tech.",
            "graduate_degree": "M.Tech.",
            "undergraduate_institute_details": "Institute of Education",
            "graduate_institute_details": "Institute of Education",
            "occupation_details": "software engineer",
            "employment": "Private Job",
            "gotra": "",
            "work_location_city": "Mumbai",
            "work_location_country": "India",
            "salary_details": "20 Lac",
            "food_habits": "",
            "drinking_habits": "",
            "smoking_habits": "",
            "health_issues": "",
            "food_liking": [],
            "gender": "Male",
            "age": 24,
            "hobbies": [
                "movies"
            ],
            "education_institute_details": "Test University",
            "marital_status": "Never Married"
        },
        "family_details": {
            "about_family": "I come from well educated family.",
            "father_occupation": "engineer",
            "mother_occupation": "housewife",
            "family_location_city": "Mumbai",
            "father": "Retired",
            "mother": "Retired",
            "no_of_brothers": 0,
            "no_of_sisters": 2
        },
        "religion_details": {
            "religion": "Hindu",
            "caste": "Brahmin",
            "sub_caste": "Brahmin"
        },
        "address_details": {
            "address1": "1234 Big Bazaar Road",
            "address2": "Near Big Circle",
            "city": "Delhi",
            "state": "Delhi",
            "zip": "10001",
            "country": "IN"
        },
        "contact_details": {
            "primary_email": "NitinNew@test.com",
            "secondary_email": "NitinNew1@test.com",
            "phone_no_area_code": "",
            "phone_no": "9020202020"
        },
        "creationdate": "2020-01-20T19:30:45.321Z",
        "modificationdate": "2020-01-20T19:30:45.321Z",
        "profile_verified": false,
        "profile_status": "Active",
        "_id": "5da954af0786c33250a9117a",
        "profile_active": true,
		 "images": [

    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
        "user_id": {
            "birthdate": "1988-01-01T23:28:56.782Z",
            "creationdate": "2019-01-01T23:28:56.782Z",
            "modificationdate": "2019-10-17T06:48:27.250Z",
            "deactivationdate": "2019-10-17T06:48:27.250Z",
            "security_question": "City where you did your first job?",
            "membership_details": {
                "membershipFromDate": "2019-10-17T06:48:27.251Z",
                "membershipToDate": "2019-10-17T06:48:27.251Z",
                "price": 29.99,
                "membershipType": "3 Months Classic"
            },
            "active": true,
            "_id": "5da80ebbb9308e53842186f6",
            "firstname": "Geeta",
            "lastname": "Patil",
            "password": "Geeta",
            "email": "geeta@test.com",
            "age": 30,
            "source": "Internet",
            "security_answer": "Mumbai",
            "__v": 0
        },
        "__v": 0
    },
    {
        "about_details": {
            "about_myself": "I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai.",
            "birthdate": "1988-01-01T23:28:56.782Z",
            "spoken_languages": [],
            "photos": [],
            "looking_for_details": "I am looking for a good girl.",
            "interests": [],
            "education_details": "master of science",
            "undergraduate_degree": "B.Tech.",
            "graduate_degree": "M.Tech.",
            "undergraduate_institute_details": "Institute of Education",
            "graduate_institute_details": "Institute of Education",
            "occupation_details": "software engineer",
            "employment": "Private Job",
            "gotra": "",
            "work_location_city": "Mumbai",
            "work_location_country": "India",
            "salary_details": "20 Lac",
            "food_habits": "",
            "drinking_habits": "",
            "smoking_habits": "",
            "health_issues": "",
            "food_liking": [],
            "gender": "Male",
            "age": 24,
            "hobbies": [
                "movies"
            ],
            "education_institute_details": "Test University",
            "marital_status": "Never Married"
        },
        "family_details": {
            "about_family": "I come from well educated family.",
            "father_occupation": "engineer",
            "mother_occupation": "housewife",
            "family_location_city": "Mumbai",
            "father": "Retired",
            "mother": "Retired",
            "no_of_brothers": 0,
            "no_of_sisters": 2
        },
        "religion_details": {
            "religion": "Hindu",
            "caste": "Brahmin",
            "sub_caste": "Brahmin"
        },
        "address_details": {
            "address1": "1234 Big Bazaar Road",
            "address2": "Near Big Circle",
            "city": "Delhi",
            "state": "Delhi",
            "zip": "10001",
            "country": "IN"
        },
        "contact_details": {
            "primary_email": "NitinNew@test.com",
            "secondary_email": "NitinNew1@test.com",
            "phone_no_area_code": "",
            "phone_no": "9020202020"
        },
        "creationdate": "2020-01-20T19:30:45.321Z",
        "modificationdate": "2020-01-20T19:30:45.321Z",
        "profile_verified": false,
        "profile_status": "Active",
        "_id": "5da954af0786c33250a9117a",
        "profile_active": true,
		 "images": [
   
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
  
  ],
        "user_id": {
            "birthdate": "1988-01-01T23:28:56.782Z",
            "creationdate": "2019-01-01T23:28:56.782Z",
            "modificationdate": "2019-10-17T06:48:27.250Z",
            "deactivationdate": "2019-10-17T06:48:27.250Z",
            "security_question": "City where you did your first job?",
            "membership_details": {
                "membershipFromDate": "2019-10-17T06:48:27.251Z",
                "membershipToDate": "2019-10-17T06:48:27.251Z",
                "price": 29.99,
                "membershipType": "3 Months Classic"
            },
            "active": true,
            "_id": "5da80ebbb9308e53842186f6",
            "firstname": "Nitin",
            "lastname": "Patil",
            "password": "Nitin",
            "email": "nitin@test.com",
            "age": 30,
            "source": "Internet",
            "security_answer": "Mumbai",
            "__v": 0
        },
        "__v": 0
    },
    {
        "about_details": {
            "about_myself": "I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai.",
            "birthdate": "1988-01-01T23:28:56.782Z",
            "spoken_languages": [],
            "photos": [],
            "looking_for_details": "I am looking for a good girl.",
            "interests": [],
            "education_details": "master of science",
            "undergraduate_degree": "B.Tech.",
            "graduate_degree": "M.Tech.",
            "undergraduate_institute_details": "Institute of Education",
            "graduate_institute_details": "Institute of Education",
            "occupation_details": "software engineer",
            "employment": "Private Job",
            "gotra": "",
            "work_location_city": "Mumbai",
            "work_location_country": "India",
            "salary_details": "20 Lac",
            "food_habits": "",
            "drinking_habits": "",
            "smoking_habits": "",
            "health_issues": "",
            "food_liking": [],
            "gender": "Male",
            "age": 24,
            "hobbies": [
                "movies"
            ],
            "education_institute_details": "Test University",
            "marital_status": "Never Married"
        },
        "family_details": {
            "about_family": "I come from well educated family.",
            "father_occupation": "engineer",
            "mother_occupation": "housewife",
            "family_location_city": "Mumbai",
            "father": "Retired",
            "mother": "Retired",
            "no_of_brothers": 0,
            "no_of_sisters": 2
        },
        "religion_details": {
            "religion": "Hindu",
            "caste": "Brahmin",
            "sub_caste": "Brahmin"
        },
        "address_details": {
            "address1": "1234 Big Bazaar Road",
            "address2": "Near Big Circle",
            "city": "Delhi",
            "state": "Delhi",
            "zip": "10001",
            "country": "IN"
        },
        "contact_details": {
            "primary_email": "NitinNew@test.com",
            "secondary_email": "NitinNew1@test.com",
            "phone_no_area_code": "",
            "phone_no": "9020202020"
        },
        "creationdate": "2020-01-20T19:30:45.321Z",
        "modificationdate": "2020-01-20T19:30:45.321Z",
        "profile_verified": false,
        "profile_status": "Active",
        "_id": "5da954af0786c33250a9117a",
        "profile_active": true,
		 "images": [
           'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg'
  ],
        "user_id": {
            "birthdate": "1988-01-01T23:28:56.782Z",
            "creationdate": "2019-01-01T23:28:56.782Z",
            "modificationdate": "2019-10-17T06:48:27.250Z",
            "deactivationdate": "2019-10-17T06:48:27.250Z",
            "security_question": "City where you did your first job?",
            "membership_details": {
                "membershipFromDate": "2019-10-17T06:48:27.251Z",
                "membershipToDate": "2019-10-17T06:48:27.251Z",
                "price": 29.99,
                "membershipType": "3 Months Classic"
            },
            "active": true,
            "_id": "5da80ebbb9308e53842186f6",
            "firstname": "Nitin",
            "lastname": "Patil",
            "password": "Nitin",
            "email": "nitin@test.com",
            "age": 30,
            "source": "Internet",
            "security_answer": "Mumbai",
            "__v": 0
        },
        "__v": 0
    },
    {
        "about_details": {
            "about_myself": "I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai. I am a software engineer working in Mumbai.",
            "birthdate": "1988-01-01T23:28:56.782Z",
            "spoken_languages": [],
            "photos": [],
            "looking_for_details": "I am looking for a good girl.",
            "interests": [],
            "education_details": "master of science",
            "undergraduate_degree": "B.Tech.",
            "graduate_degree": "M.Tech.",
            "undergraduate_institute_details": "Institute of Education",
            "graduate_institute_details": "Institute of Education",
            "occupation_details": "software engineer",
            "employment": "Private Job",
            "gotra": "",
            "work_location_city": "Mumbai",
            "work_location_country": "India",
            "salary_details": "20 Lac",
            "food_habits": "",
            "drinking_habits": "",
            "smoking_habits": "",
            "health_issues": "",
            "food_liking": [],
            "gender": "Male",
            "age": 24,
            "hobbies": [
                "movies"
            ],
            "education_institute_details": "Test University",
            "marital_status": "Never Married"
        },
        "family_details": {
            "about_family": "I come from well educated family.",
            "father_occupation": "engineer",
            "mother_occupation": "housewife",
            "family_location_city": "Mumbai",
            "father": "Retired",
            "mother": "Retired",
            "no_of_brothers": 0,
            "no_of_sisters": 2
        },
        "religion_details": {
            "religion": "Hindu",
            "caste": "Brahmin",
            "sub_caste": "Brahmin"
        },
        "address_details": {
            "address1": "1234 Big Bazaar Road",
            "address2": "Near Big Circle",
            "city": "Delhi",
            "state": "Delhi",
            "zip": "10001",
            "country": "IN"
        },
        "contact_details": {
            "primary_email": "NitinNew@test.com",
            "secondary_email": "NitinNew1@test.com",
            "phone_no_area_code": "",
            "phone_no": "9020202020"
        },
        "creationdate": "2020-01-20T19:30:45.321Z",
        "modificationdate": "2020-01-20T19:30:45.321Z",
        "profile_verified": false,
        "profile_status": "Active",
        "_id": "5da954af0786c33250a9117a",
        "profile_active": true,
		 "images": [
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg',
    'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'
  ],
        "user_id": {
            "birthdate": "1988-01-01T23:28:56.782Z",
            "creationdate": "2019-01-01T23:28:56.782Z",
            "modificationdate": "2019-10-17T06:48:27.250Z",
            "deactivationdate": "2019-10-17T06:48:27.250Z",
            "security_question": "City where you did your first job?",
            "membership_details": {
                "membershipFromDate": "2019-10-17T06:48:27.251Z",
                "membershipToDate": "2019-10-17T06:48:27.251Z",
                "price": 29.99,
                "membershipType": "3 Months Classic"
            },
            "active": true,
            "_id": "5da80ebbb9308e53842186f6",
            "firstname": "Nitin",
            "lastname": "Patil",
            "password": "Nitin",
            "email": "nitin@test.com",
            "age": 30,
            "source": "Internet",
            "security_answer": "Mumbai",
            "__v": 0
        },
        "__v": 0
    }

]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
