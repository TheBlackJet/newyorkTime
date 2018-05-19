import React, { Component } from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ModalComponent } from './ModalComponent';

enzyme.configure({ adapter: new Adapter() });

it('ModalComponent has data', () => {

    const component = enzyme.shallow(
        <ModalComponent />, { lifecycleExperimental: true }
    );

    component.setProps({'isModalBoxVisible': true})
    expect(component.find('h2').children().text()).toEqual('Details');
});

