import React, { Component } from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ItemComponent } from './ItemComponent';

enzyme.configure({ adapter: new Adapter() });

it('ItemComponent has data', () => {
    const testData = {
        snippet: 'From the Flushing Remonstranc…tructure.',
        source: 'The New York Times',
        pubDate: 'Wed May 16 2018',
        media: 'https://www.nytimes.com/image…Large.jpg'
    }
    const component = enzyme.shallow(
        <ItemComponent data={testData} />,
    );
  expect(component.find('.content-pubdate').text()).toEqual("Publish Date : Wed May 16 2018");
  expect(component.find('.content-snippet').text()).toEqual("From the Flushing Remonstranc…tructure.");
  expect(component.find('.content-source').text()).toEqual("Source: The New York Times");
});

