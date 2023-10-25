import React from 'react'

function Priority() {
  return (
    <div>
        <div class=" ml-10 h-full" style={{width: "400px"}}>
<div class="text-sm text-gray-600 font-normal antialiased tracking-normal">
    Projects &nbsp; / &nbsp; Biltrax IT Project
</div>
<div class="text-2xl mt-3 text-black font-semibold antialiased tracking-normal">
    All Issues
</div>
<div class="flex mt-5 w-full">
    <input type="text" class="w-1/2 h-7 px-2 text-gray-500 border rounded text-xs" placeholder="Filter Issue ..." />
    <div class="items-center cursor-pointer px-2  mb-1 text-sm text-blue-500 hover:underline">Advanced search</div>
</div>
<div class="bg-gray-100 mt-4 rounded">
    <div class="flex  justify-between px-1 text-center items-center">
        <div class="flex px-3 py-1 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">
            <a href="#" class="">Priority</a>
            <svg class="h-4 w-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/>
            </svg>
        </div>
        <div class="p-2">
            <button class="flex rounded px-4 py-2 focus:outline-none text-gray-500 hover:bg-blue-100 justify-around">
                <svg class="h-3 w-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M441.156 322.876L392.49 275.49a8.523 8.523 0 00-11.93.017l-81.894 80.299V8.533A8.536 8.536 0 00290.133 0h-68.267a8.536 8.536 0 00-8.533 8.533v347.273l-81.894-80.299a8.528 8.528 0 00-11.921-.017l-48.666 47.386a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l179.2 174.481A8.508 8.508 0 00256 512c2.15 0 4.292-.811 5.956-2.423l179.2-174.481a8.526 8.526 0 002.577-6.11c0-2.304-.93-4.506-2.577-6.11z"/></svg>
            </button>
        </div>
    </div>
    <div class="mx-2 bg-white rounded">
        <div class="overflow-auto flex-col" style={{height: "308px"}}>
            <div class="flex-col cursor-pointer rounded hover:bg-blue-100">
                <div class="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                    Selected Options : Tracked
                </div>
                <div class="flex px-3 justify-between">
                    <div class="flex">
                        <div class="bg-red-500 rounded h-4 w-4 p-1">
                            <svg class="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
                        </div>
                        <div class="font-bold text-gray-500 ml-1 text-xs">
                            NITSWEBAPP-01
                        </div>
                    </div>
                    <button class="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around">
                        <span class="text-xs font-bold">AS</span>
                    </button>
                </div>
                <div class="border mt-3"></div>
            </div>
            <div class="flex-col cursor-pointer bg-blue-100">
                <div class="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                    Project & Company Slug
                </div>
                <div class="flex px-3 justify-between">
                    <div class="flex">
                        <div class="bg-red-500 rounded h-4 w-4 p-1">
                            <svg class="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
                        </div>
                        <div class="font-bold line-through text-gray-500 ml-1 text-xs">
                            NITSWEBAPP-02
                        </div>
                    </div>
                    <button class="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around">
                        <span class="text-xs font-bold">AS</span>
                    </button>
                </div>
                <div class="border mt-3"></div>
            </div>
            <div class="flex-col cursor-pointer hover:bg-blue-100">
                <div class="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                    Selected Options : Tracked
                </div>
                <div class="flex px-3 justify-between">
                    <div class="flex">
                        <div class="bg-red-500 rounded h-4 w-4 p-1">
                            <svg class="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
                        </div>
                        <div class="font-bold text-gray-500 ml-1 text-xs">
                            NITSWEBAPP-03
                        </div>
                    </div>
                    <button class="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around">
                        <span class="text-xs font-bold">AS</span>
                    </button>
                </div>
                <div class="border mt-3"></div>
            </div>
            <div class="flex-col cursor-pointer hover:bg-blue-100">
                <div class="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                    Project & Company Slug
                </div>
                <div class="flex px-3 justify-between">
                    <div class="flex">
                        <div class="bg-red-500 rounded h-4 w-4 p-1">
                            <svg class="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
                        </div>
                        <div class="font-bold line-through text-gray-500 ml-1 text-xs">
                            NITSWEBAPP-04
                        </div>
                    </div>
                    <button class="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around">
                        <span class="text-xs font-bold">AS</span>
                    </button>
                </div>
                <div class="border mt-3"></div>
            </div>
            <div class="flex-col cursor-pointer hover:bg-blue-100">
                <div class="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                    Selected Options : Tracked
                </div>
                <div class="flex px-3 justify-between">
                    <div class="flex">
                        <div class="bg-red-500 rounded h-4 w-4 p-1">
                            <svg class="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
                        </div>
                        <div class="font-bold text-gray-500 ml-1 text-xs">
                            NITSWEBAPP-05
                        </div>
                    </div>
                    <button class="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around">
                        <span class="text-xs font-bold">AS</span>
                    </button>
                </div>
                <div class="border mt-3"></div>
            </div>
            <div class="flex-col cursor-pointer hover:bg-blue-100">
                <div class="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
                    Project & Company Slug
                </div>
                <div class="flex px-3 justify-between">
                    <div class="flex">
                        <div class="bg-red-500 rounded h-4 w-4 p-1">
                            <svg class="h-2 w-2 text-white" fill="currentColor " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
                        </div>
                        <div class="font-bold text-gray-500 ml-1 text-xs">
                            NITSWEBAPP-06
                        </div>
                    </div>
                    <button class="flex rounded-full p-1 pb-1 h-6 w-6 bg-orange-500 justify-around">
                        <span class="text-xs font-bold">AS</span>
                    </button>
                </div>
                <div class="border mt-3"></div>
            </div>
        </div>
    </div>
    <div class="flex  justify-between px-1 text-center items-center">

        <div class="p-2">
            <button class="flex rounded px-4 py-2 focus:outline-none text-gray-500 hover:bg-blue-100 justify-around">
               <svg class="h-3 w-3 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M441.156 322.876L392.49 275.49a8.523 8.523 0 00-11.93.017l-81.894 80.299V8.533A8.536 8.536 0 00290.133 0h-68.267a8.536 8.536 0 00-8.533 8.533v347.273l-81.894-80.299a8.528 8.528 0 00-11.921-.017l-48.666 47.386a8.503 8.503 0 00-2.586 6.11c0 2.304.939 4.506 2.586 6.11l179.2 174.481A8.508 8.508 0 00256 512c2.15 0 4.292-.811 5.956-2.423l179.2-174.481a8.526 8.526 0 002.577-6.11c0-2.304-.93-4.506-2.577-6.11z"/></svg>
                <svg class="h-4 w-4 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 013.414-1.736L8.989 1.8a8.112 8.112 0 00-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 01-3.414 1.736l.069 2.076a8.122 8.122 0 004.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z"/>
                </svg>
            </button>
        </div>
        <div class="flex px-3 py-1 self-center text-sm antialiased rounded-md text-gray-600 ">
            issue 48 of 88
        </div>
    </div>

</div>
</div>
      
    </div>
  )
}

export default Priority
