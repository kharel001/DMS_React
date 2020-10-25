import React from 'react';
import NotificationItem from './NotificationItem';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data= {
    notification:{
    image:"image1",
    badge:"badge1",
    name:"name1",
    time:"time1",
    message:"hello"
    }
}
const setup = (props = {}) => {
    return shallow( < NotificationItem
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot NotificationItem", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})



it("Components NotificationItem", () => {
    let wrapper = setup(dummy_data);
    let avatarComp = findByTestAttr(wrapper, "avatarComp");
    expect(avatarComp.prop('alt')).toEqual("name1");
    expect(avatarComp.prop('src')).toEqual("image1");
    let nameComp = findByTestAttr(wrapper, "nameComp");
    expect(nameComp.text()).toEqual("name1");
    let timeComp = findByTestAttr(wrapper, "timeComp");
    expect(timeComp.text()).toEqual("time1");
    let messageComp = findByTestAttr(wrapper, "messageComp");
    expect(messageComp.text()).toEqual("hello");
})