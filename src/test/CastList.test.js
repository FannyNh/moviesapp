import React from 'react';
import CastList from '../components/CastList';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import * as redux from "react-redux";


configure({adapter: new Adapter()});

describe('Shallow rendered Cast list', () => {
    let component = null
    // Sample props to pass to our shallow render
    const props = {
        movieId: "675",
    }
    beforeEach(async () => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch')
        useDispatchSpy.mockReturnValue({})
        const useSelectorSpy = jest.spyOn(redux, 'useSelector')
        useSelectorSpy.mockReturnValue([{
            "adult": false,
            "gender": 2,
            "id": 10980,
            "known_for_department": "Acting",
            "name": "Daniel Radcliffe",
            "original_name": "Daniel Radcliffe",
            "popularity": 13.509,
            "cast_id": 27,
            "character": "Harry Potter",
            "credit_id": "52fe4267c3a36847f801be91",
            "order": 0
        }, {
            "adult": false,
            "gender": 2,
            "id": 10989,
            "known_for_department": "Acting",
            "name": "Rupert Grint",
            "original_name": "Rupert Grint",
            "popularity": 3.523,
            "cast_id": 37,
            "character": "Ron Weasley",
            "credit_id": "52fe4267c3a36847f801beb9",
            "order": 1
        }])


        component = await shallow(<CastList/>);
        jest.clearAllMocks()

    }, 30000)


    it('should render a list of all casting member s cards', () => {
        jest.setTimeout(30000);
        expect(component).toBeDefined();
        expect(component.find('img')).toBeDefined();
        expect(component.find('.name')).toHaveLength(2);
        expect(component.find('.name').first().text()).toBe('Daniel Radcliffe');

    });

});


