// Link.react.test.js
import React from 'react';
import {shallow} from 'enzyme';
import PlaySong from '../components/PlaySong';
import YouTube from 'react-youtube';
import renderer from 'react-test-renderer';


test('Playsong should render as expected' ,()=>{
    const component = shallow(<PlaySong/>);
    console.log(component);
})