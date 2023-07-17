import * as React from
"https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import styles from './Kotlin.css';
import jetnews from './icons/jetnews.png';


import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ZoomInScrollOut = batch(Move(), Fade(), ZoomIn());
const FadeUp = batch(FadeIn(), MoveOut(), );


function Kotlin(){
  return(
    <ScrollContainer>
       <ScrollPage page={0}>  
        <Animator animation={FadeUp}>
        <div className="wrapper">
      <Card className="kot"
         img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-one/badge.svg"
        title="Introduction to Kotlin"
        description="Learn to code in Kotlin, a modern programming language that makes coding clear and accessible."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-first-kotlin-program?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-one%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-first-kotlin-program#1">
          Take a codelab
        </a>}
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-two/android-basics-kotlin-pathway-two.svg"
        title="Create your First App"
        description="Learn to create Android apps using Android Studio in this introductory pathway."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-first-template-project?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-two%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-first-template-project#0">
          Take a codelab
        </a>}
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-three/android-basics-kotlin-pathway-three.svg"
        title="Build a basic layout"
        description="Learn how to add images and text to your Android apps."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-birthday-card-app?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-three%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-birthday-card-app#0">
          Take a codelab
        </a>}
        

        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-four/android-basics-kotlin-pathway-four.svg"
        title="Add a button to an app"
        description="Learn how to use classes, objects, and conditionals to create an interactive app for your users."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-create-dice-roller-app-with-button?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-four%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-create-dice-roller-app-with-button#0">
          Take a codelab
        </a>}
        
        />
        </div>
        </Animator>
    </ScrollPage>
  
    <ScrollPage page={1}>
        <Animator animation={FadeUp}>
        <div className="wrapper">
          
      <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-compose-unit-4-pathway-1/badge.svg"
        title="Navigate between screens."
        description="Add another screen to an app by adding a second activity, and use an intent to navigate to it. Also, learn the basics of the activity lifecycle as you navigate into and out of different activities."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-activities-intents?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-unit-3-pathway-1%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-activities-intents#0">
          Take a codelab
        </a>}
        
       />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-compose-unit-4-pathway-2/badge.svg"
        title="Introduction to the Navigation component"
        description="Learn about the Navigation Architecture Component in Android Jetpack, which provides a framework for building in-app navigation."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/android-basics-kotlin-test-navigation-components?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-unit-3-pathway-2%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fandroid-basics-kotlin-test-navigation-components#0">
          Take a codelab
        </a>}
        
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-unit-3-pathway-5/badge.svg"
        title="Architecture Components"
        description="Learn how to use Android Jetpack Architecture components, a collection of libraries that help you design robust, testable, and maintainable apps."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-viewmodel?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-unit-3-pathway-3%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-viewmodel#0">
          Take a codelab
        </a>}
        
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-compose-unit-4-pathway-3/badge.svg"
        title="Advanced Navigation Examples"
        description="Combine everything you've learned in this unit about navigation, ViewModel, data binding, and LiveData by building a more advanced app that also includes custom back stack behavior."
       
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/basic-android-kotlin-training-navigation-backstack?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-kotlin-unit-3-pathway-4%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-training-navigation-backstack#0">
          Take a codelab
        </a>}
        />
        </div>
        </Animator>
    </ScrollPage>


    <ScrollPage page={2}>
        <Animator animation={FadeUp}>
        <div className="wrapper">
          
      <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/jetpack-compose-for-android-developers-1/badge.svg"
        title="Compose Essentials."
        description="Take your first steps with Jetpack Compose. Learn about composable functions, basic layouts and state, Material Design, and more."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/jetpack-compose-basics?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fjetpack-compose-for-android-developers-1%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fjetpack-compose-basics#0">
          Take a codelab
        </a>}
        
       />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/jetpack-compose-for-android-developers-2/badge.svg"
        title="Layouts,Theming and animations"
        description="Learn about the Navigation Architecture Component in Android Jetpack, which provides a framework for building in-app navigation."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/jetpack-compose-animation?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fjetpack-compose-for-android-developers-2%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fjetpack-compose-animation#0">
          Take a codelab
        </a>}
        
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/jetpack-compose-for-android-developers-3/badge.svg"
        title="Architecture and State"
        description="Build a functioning app using navigation, advanced state, and side effects."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/jetpack-compose-advanced-state-side-effects?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fjetpack-compose-for-android-developers-3%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fjetpack-compose-advanced-state-side-effects#0">
          Take a codelab
        </a>}
        
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/jetpack-compose-for-android-developers-5/badge.svg"
        title="Form Factors"
        description="Use Compose to develop apps for multiple screen formats and device types."
        button={<a className="link_btn"
        href="https://developer.android.com/codelabs/compose-for-wear-os?continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fjetpack-compose-for-android-developers-5%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fcompose-for-wear-os#0">
          Take a codelab
        </a>}
        />
        </div>
        </Animator>
    </ScrollPage>
    
    </ScrollContainer>
 
        
      
    
  )
}


function Card(props){
  return(
  <div className="kot">
      <div className="kot__body">
        <img class="kot__img" src={props.img}/>
        <h2 className="kot__title">{props.title}</h2>
        <p className="kot__description">{props.description}</p>
      </div>
    <button className="kot_btn" >{props.button}

        
      </button>
      </div>
  )
}

export default Kotlin; 