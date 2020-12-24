import { Row } from 'native-base';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d6a4f',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5@ms',
    marginBottom: '20@ms',
  },
  headerText: {
    fontSize: '20@ms',
    textAlign: 'center',
    color: 'white',
  },
  subheaderText: {
    color: 'white',
  },
  imageContainer: {
    borderRadius: '20@ms',
    marginTop: '5@ms',
    padding: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d6a4f',
    marginHorizontal: '30@ms',
  },
  image: {
    height: '200@ms',
    width: '200@ms',
    resizeMode: 'contain',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  individualScore: {
    height: '40@ms',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '10@ms',
    top: '13@ms'
  },
  individualScore1: {
    height: '45@ms',
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1@ms',
    backgroundColor: '#40916c',
    borderColor: '#40916c',
    borderRadius: '25@ms',
    position: 'absolute',
    left: '40@ms',
    top: '10@ms'
  },
  scoreText: {
    fontSize: '18@ms',
    textAlign: 'center',
    color: 'white',
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8@ms',
    marginHorizontal: '25@ms',
    flexDirection: 'row',
  },
  questionText: {
    fontSize: '16@ms',
    color: 'white',
  },
  gifImg: {
    height: '35@ms',
    width: '35@ms'
  },
  problemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50@ms',
  },
  optionsBox: {
    marginHorizontal: '25@ms',
    marginVertical: '3@ms',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5@ms'
  },
  individualOptions: {
    height: '45@ms',
    justifyContent: 'center',
    width: '90%',
    borderRadius: '30@ms',
    borderWidth: '1@ms',
    borderColor: '#40916c',
    backgroundColor: '#40916c',
    elevation: 2,
  },
  options: {
    fontSize: '15@ms',
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    marginTop: '25@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    justifyContent: 'center',
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: '20@ms',
    width: '20@ms',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontIcon: {
    fontSize: '35@ms',
    paddingHorizontal: '4@ms',
    color: 'white',
  },
  iconText: {
    fontSize: '22@ms',
    color: 'white',
  },
});

export default styles;
