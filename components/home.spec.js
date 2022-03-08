import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { useSelector } from 'react-redux'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as redux from 'react-redux'
import Home from './home'
const reactMock = require('react');

Enzyme.configure({ adapter: new Adapter() })

const crypto = require('crypto')

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length)
  }
})

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
        back: jest.fn()
      }
    }
  }
})

jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
  }
})

describe('Test cases for MobileNumberCheck', () => {
  let mountWrapper
  let useEffect
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f())
  }

  beforeEach(() => {
    const store = configureMockStore([thunk])({
      isLoading: false
    })

    const mockAppState = {
        news: {
            isError: false,
            isLoading: false,
            newsList: [
                {
                  news_title: "Test data",
                },
              ],
            isRequested: "Done",
            error: "",
            newsIndex:123
          }
    }

    const setHookState = (newState) => jest.fn().mockImplementation(() => [
        newState,
        () => {},
      ]);
      reactMock.useState = setHookState({
        data: {
            multimedia : ['dddd'],
            news_title : 'hello'
        }
            
      });
    jest.spyOn(redux, 'useSelector').mockImplementation(() => store.getState().news)

    /* mocking useDispatch on our mock store  */
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => store.dispatch)
    /* shallow rendering */
    useEffect = jest.spyOn(React, 'useEffect').mockImplementation()
    mockUseEffect() // 2 times
    useSelector.mockImplementation((callback) => callback(mockAppState))
    mountWrapper = () => mount(<Home store={store} />)
  })

  it('should render MobileNumberCheck', () => {
    const latestMountWrapper = mountWrapper()
    latestMountWrapper.find('#searchButton').at(0).simulate('click')
  })
})