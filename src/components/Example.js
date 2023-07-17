import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import React from "react";
import styles from'./Kotlin.css';
import jetnews from './icons/jetnews.png';
import delish1 from './icons/delish1.png';
import pokidex1 from './icons/pokidex1.png';
import podcast from './icons/podcast1.png';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
  

function Example(){
return(
<ScrollContainer>
    <ScrollPage page={0}>
        <Animator animation={FadeUp}>
            <h1> Checkout the Examples</h1>
        </Animator>
    </ScrollPage>
    <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
            <h1>Get Inspired by them</h1>
        </Animator>
    </ScrollPage>
    <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}>
        <h1>Jetnews App</h1>
        </Animator>
    </ScrollPage>
    <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
        <img src={jetnews} alt="jetnews" />;
        <p align="center"><a href="https://github.com/android/compose-samples/tree/main/JetNews" >Source code</a></p>
        </Animator>
    </ScrollPage>
    <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut}>
            <h1>Pokidex</h1>
        </Animator>
    </ScrollPage>
    <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
           <img src={pokidex1} alt="pokidex1"/>
           <p align="center"><a href='https://github.com/skydoves/Pokedex' >Source code</a></p>
        </Animator>
    </ScrollPage>
    <ScrollPage page={6}>
        <Animator animation={ZoomInScrollOut}>
            <h1>Delish</h1>
        </Animator>
    </ScrollPage>
    <ScrollPage page={7}>
        <Animator animation={ZoomInScrollOut}>
        <img src={delish1} alt="delish"/>
        <p align="center"><a href='https://github.com/Elbehiry/Delish' >Source code</a></p>
        </Animator>
    </ScrollPage>
    <ScrollPage page={8}>
        <Animator animation={ZoomInScrollOut}>
        <h1>Podcast App</h1>
        </Animator>
    </ScrollPage>
    <ScrollPage page={9}>
        <Animator animation={ZoomInScrollOut}>
        <img src={podcast} alt="podcast"/>
        <p align="center"><a href='https://github.com/fabirt/podcast-app' >Source code</a></p>
        </Animator>
    </ScrollPage>
</ScrollContainer>
);

  }


  export default Example;