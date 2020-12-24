import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#2d6a4f',
  },
  header: {
    alignItems: 'center',
    marginTop: '50@ms',
  },
  headerText: {
    color: 'white',
    fontFamily: 'Cochin',
    fontSize: '120@ms',
    fontWeight: 'bold',
    // textAlign: 'center',,
  },
  headerTextOfSuccess:{
    color: 'white',
    fontFamily: 'Cochin',
    fontSize: '45@ms',
    fontWeight: 'bold',
  },
  subheaderText: {
    fontSize: '16@ms',
    marginTop: '20@ms',
    marginHorizontal: '50@ms',
    color: 'white',
    textAlign: 'center',
  },
  animation: {
    height: '220@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20@ms'
  },
  animation2: {
    height: '250@ms',
    width: '250@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '17@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: 'white',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: {flex: 1, justifyContent: 'center'},
  button: {
    margin: '10@ms',
    backgroundColor: '#40916c',
    elevation: 4,
    height: '50@ms',
    width: '120@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '30@ms',
  },
  txt: {
    fontSize: '20@ms',
    color: '#fff'
  },
});
