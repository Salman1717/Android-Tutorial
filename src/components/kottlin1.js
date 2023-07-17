import * as React from
"https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import styles from './Kotlin.css';
import 'animate.css';



function Kotlin1(){
  return(
  <div className="wrapper">
      <Card className="kot" 
       class="animate__animated   animate__slideInRight"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-one/badge.svg"
        title="Introduction to Kotlin"
        description="Learn to code in Kotlin, a modern programming language that makes coding clear and accessible."
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-two/android-basics-kotlin-pathway-two.svg"
        title="Create your First App"
        description="Learn to create Android apps using Android Studio in this introductory pathway."
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-three/android-basics-kotlin-pathway-three.svg"
        title="Build a basic layout"
        description="Learn how to add images and text to your Android apps."
        />
       <Card className="kot"
        img ="https://developers.google.com/profile/badges/playlists/android/android-basics-kotlin-pathway-four/android-basics-kotlin-pathway-four.svg"
        title="Add a button to an app"
        description="Learn how to use classes, objects, and conditionals to create an interactive app for your users."
        />
      
      </div>
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
      <button className="kot_btn" onClick={()=>alert("you have clicked")}>
        Take a codelab
      </button>
      </div>
  )
}

export default Kotlin1; 