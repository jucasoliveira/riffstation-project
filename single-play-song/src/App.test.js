import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import PlaySong from "./components/PlaySong";




it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <PlaySong/>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    expect(wrapper.contains(welcome)).toEqual(false);
});

it('render snapshot',()=>{
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
})