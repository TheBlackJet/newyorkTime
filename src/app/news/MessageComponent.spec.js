import React, { Component } from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MessageComponent } from './MessageComponent';

enzyme.configure({ adapter: new Adapter() });

it('MessageComponent has data', () => {
    const testData = {  }
    const component = enzyme.shallow(
        <MessageComponent />, { lifecycleExperimental: true }
    );

    component.setProps({'message': 'This is error'})
    expect(component.find('.news-error').text()).toEqual('This is error');
});

