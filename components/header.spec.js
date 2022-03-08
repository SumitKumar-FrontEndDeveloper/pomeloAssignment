import React from 'react'
import  { mount } from 'enzyme'
import Header from './header'
const reactMock = require('react');
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


describe('Test cases for MobileNumberCheck', () => {
  let mountWrapper
  let useEffect
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f())
  }

  beforeEach(() => {
    const setHookState = (newState) => jest.fn().mockImplementation(() => [
      newState,
      () => {},
    ]);
    reactMock.useState = setHookState({
      searchKey: 'hello'
    });
    useEffect = jest.spyOn(React, 'useEffect').mockImplementation()
    mockUseEffect() 
    mountWrapper = () => mount(<Header  />)
  })

  it('should render MobileNumberCheck', () => {
    const latestMountWrapper = mountWrapper()
    latestMountWrapper.find('#searchBtn').at(0).simulate('click')
    latestMountWrapper.find('#formId').at(0).simulate('submit')
    latestMountWrapper.find('#inputField').at(0).simulate('change')
    latestMountWrapper.find('#crossBtn').at(0).simulate('click')
  })
})
