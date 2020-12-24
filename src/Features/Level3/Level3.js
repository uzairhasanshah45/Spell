import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, SafeAreaView} from 'react-native';
import {shapes1, shapes2} from '../../shared/shape';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Level1/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Level3 = (props) => {
  const Items = shapes1;
  const totalProblems = Items.length - 1;
  const myIcon1 = <Icon name="heart" style={styles.fontIcon} />;
  const myIcon2 = <Icon name="heart-half-full" style={styles.fontIcon} />;
  const myIcon3 = <Icon name="heart-outline" style={styles.fontIcon} />;  
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [life, setLife] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0)
  const threshold = 3;
  const {navigation} = props;

  useEffect(() => {
    itemShuffle();
  }, [props.route.params]);

  useEffect(() => {
    if (images.length > 0) {
      randomOptions();
      setLoading(true);
    }
  }, [images]);

  useEffect(() => {
    if (currentQuestion > 0) {
      randomOptions();
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (life === 0) {
      images.splice(0,currentQuestion)
      setCurrentQuestion(0)
      setCount(count+1)
      failedScreen();
    }
  }, [life]);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setCurrentQuestion(0);
      setLife(3);
      setScore(0);
    });

    return unsubscribe;
  }, [props.navigation]);

  const iconLoop = () => {
    let array = [];
    for (let i = life; i <= life; i++) {
      if(i == 1)
      {
        array.push(<View key={i}>{myIcon3}</View>);
      }else if( i == 2)
      {
        array.push(<View key={i}>{myIcon2}</View>);
      }else if( i == 3){
        array.push(<View key={i}>{myIcon1}</View>);
      }
    }
    return array;
  };

  const randomOptions = () => {
    let index;
    let names = [];
    let arr = [...images];

    let i = arr.length - 1;

    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    const slice = arr.slice(0, 1);


    /*======================================== shuffle names ======================================*/
 
    Array.prototype.shuffle = function(){
        for (var i = 0; i < this.length; i++){
            var a = this[i];
            var b = Math.floor(Math.random() * this.length);
            this[i] = this[b];
            this[b] = a;
        }
    }
  
    var slice1 = shuffleProperties(slice); 
    function shuffleProperties(obj) {
        var new_obj = {};
        var keys = getKeys(obj);
        keys.shuffle();
        for (var key in keys){
            if (key == "shuffle") continue; 
            new_obj[keys[key]] = obj[keys[key]];
        }
        return new_obj;
    }
 
    function getKeys(slice){
        var arr = new Array();
        for (var key in slice)
            arr.push(key);
        return arr;
    }

    /*======================================== Push shuffle code ======================================*/


    for (let i = 0; i < 4; i++) {
      if(i == 0)
      {
        names.push(slice1[0].name1);
      }
      else if(i == 1)
      {
        names.push(slice1[0].name2);
      }
      else if(i == 2)
      {
        names.push(slice1[0].name3);
      }
      else
      {
        names.push(slice1[0].name3);
      }
    }

    let exists = false;
    for (let i = 0; i < names.length; i++) {
      if (names[i] === images[currentQuestion].name1) {
        exists = true;
      }
    }

  /*======================================== if doesn't exist let them exist ======================================*/

    if (exists === false) {
      let num, already = new Object;
      let n1 = true;
      let n2, n3, n4 = false
      let start = 0, end = 4;
      
      for (let i = 0; i < 4;)
      {
          num = (Math.random() * (end - start) + start) ^ 0;
          if (!(num in already))
          {
              if(n1 ==true)
              {
                  already[num] = num;
                  i++;
                  names.splice(num, 1, images[currentQuestion].name1);
                  n1 = false
                  n2 = true
              }
              else if(n2 == true)
              {
                  already[num] = num;
                  i++;
                  names.splice(num, 1, images[currentQuestion].name2);
                  n2 = false
                  n3 = true
              }
              else if(n3 ==true)
              {
                  already[num] = num;
                  i++;
                  names.splice(num, 1, images[currentQuestion].name3);
                  n3 = false
                  n4 = true
              }
              else if(n4 ==true)
              {
                  already[num] = num;
                  i++;
                  names.splice(num, 1, images[currentQuestion].name4);
              }
          }
      }
    }
    setOptions(names);
  };

  const itemShuffle = () => {
    const array = [];
    console.log('item shuffle count level 3', count)

    if(props.route.params && count>=1 && count<=1)
    {
      array.push(...props.route.params.image)
      if(array.length < 13)
      {
        let i = 0
        while(array.length != 13)
        {
          array.push(shapes2[i])
          i++
        }
      }
    }
    else{
      array.push(...Items)
      if(count>1)
      {
        setCount(0)
      }
    }

    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setImages(array);
  };

  const failedScreen = () => {
    return navigation.navigate('FailedScreen', {level: 3, image: images});
  };

  const checkAnswer = (input) => {
    let lyf;
    if (input == images[currentQuestion].name3) {
      setScore(score + 1);
    } else {
      setLife(life - 1);
    }
    if (currentQuestion === totalProblems) {
      return navigation.navigate('SuccessScreen', {level: 3});
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const renderImages = () => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images[currentQuestion].image} />
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Guess the name.</Text>
          <Image source={require('../../assets/images/questionmark.gif')} style={styles.gifImg}/>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[0]);
              }}>
              <Text style={styles.options}>{options[0]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[1]);
              }}>
              <Text style={styles.options}>{options[1]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[2]);
              }}>
              <Text style={styles.options}>{options[2]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[3]);
              }}>
              <Text style={styles.options}>{options[3]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.scoreContainer}>
        <View style={styles.individualScore1}>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
        <View style={styles.individualScore}>
          <View style={styles.iconContainer}>{iconLoop()}</View>
        </View>
      </View>
      <View style={styles.problemContainer}>
        <Text style={styles.scoreText}>Question</Text>
        <Text style={styles.scoreText}>
          {currentQuestion} | {totalProblems}
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>SpellTest</Text>
        <Text style={styles.subheaderText}>Let's check our knowledge!</Text>
      </View>
    {loading ? renderImages() : null}
  </View>
  );
};

export default Level3;
