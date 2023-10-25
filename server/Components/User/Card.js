import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
<div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="mb-4">
        <div class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div class="w-2 bg-red-600">
            </div>
            <div class="w-full flex justify-between items-start px-2 py-2">
                <div class="flex flex-col ml-2">
                    <label class="text-gray-800">Your submission was rejected</label>
                    <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur sit amet</p>
                </div>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="mb-4">
        <div class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div class="w-2 bg-green-600">
            </div>
            <div class="w-full flex justify-between items-start px-2 py-2">
                <div class="flex flex-col ml-2">
                    <label class="text-gray-800">Your submission was approved</label>
                    <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur sit amet</p>
                </div>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="mb-4">
        <div class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div class="w-2 bg-yellow-600">
            </div>
            <div class="w-full flex justify-between items-start px-2 py-2">
                <div class="flex flex-col ml-2">
                    <label class="text-gray-800">Your submission is pending</label>
                    <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur sit amet</p>
                </div>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
      </div>
    )
  }
}
