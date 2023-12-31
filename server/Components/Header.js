import React from 'react';

function Header() {
  return (
  <>
  <nav class="bg-white fixed top-0 shadow-lg w-full">
            <header className="bg-black text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">AstronFT</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Features</a></li>
          <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
            <div class="px-4 mx-auto">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                            <div class="justify-center hover:text-blue-500 hover:bg-blue-100 rounded-full p-2 text-center">

                                <svg class="w-4 h-4 mx-auto"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 477.867 477.867"><path fill-rule="evenodd" d="M119.467 0h-102.4C7.641 0 0 7.641 0 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C136.533 7.641 128.892 0 119.467 0zM102.4 102.4H34.133V34.133H102.4V102.4zM290.133 0h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C307.2 7.641 299.559 0 290.133 0zm-17.066 102.4H204.8V34.133h68.267V102.4zM460.8 0H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C477.867 7.641 470.226 0 460.8 0zm-17.067 102.4h-68.267V34.133h68.267V102.4zM119.467 170.667h-102.4C7.641 170.667 0 178.308 0 187.733v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c-.001-9.425-7.642-17.066-17.067-17.066zm-17.067 102.4H34.133V204.8H102.4v68.267zM290.133 170.667h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067zm-17.066 102.4H204.8V204.8h68.267v68.267zM460.8 170.667H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067zm-17.067 102.4h-68.267V204.8h68.267v68.267zM119.467 341.333h-102.4C7.641 341.333 0 348.974 0 358.4v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c-.001-9.426-7.642-17.067-17.067-17.067zm-17.067 102.4H34.133v-68.267H102.4v68.267zM290.133 341.333h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067zm-17.066 102.4H204.8v-68.267h68.267v68.267zM460.8 341.333H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067zm-17.067 102.4h-68.267v-68.267h68.267v68.267z"/></svg>

                            </div>
                        <div class="flex px-2 py-1 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">
                            <div class="justify-center mt-1 mr-1">
                                <img class="h-5 w-5" src="https://biltrax.atlassian.net/s/-egccmf/b/23/b6b48b2829824b869586ac216d119363/_/favicon-software.ico" />
                            </div>
                            <div class="justify-center text-xl font-semibold text-center">
                                Jira Software
                            </div>
                        </div>

                        <div class="hidden md:block">
                            <div class="flex items-center ml-3 ">
                                <a href="#" class="px-3 py-1 ml-2 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">Your work
                                </a>
                                <div class="flex px-3 py-1 ml-2 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none bg-blue-100  hover:text-blue-500 focus:bg-blue-100">
                                    <a href="#" class="">Projects</a>
                                    <svg class="h-4 w-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/>
                                    </svg>
                                </div>
                                <div class="flex px-3 py-1 ml-2 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">
                                    <a href="#" class="">Filters</a>
                                    <svg class="h-4 w-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/>
                                    </svg>
                                </div>
                                <div class="flex px-3 py-1 ml-2 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">
                                    <a href="#" class="">Dashboards</a>
                                    <svg class="h-4 w-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/>
                                    </svg>
                                </div>
                                <a href="#" class="px-3 py-1 ml-2 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">People</a>

                                <div class="flex px-3 py-1 ml-2 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none hover:bg-blue-100 hover:text-blue-500 focus:bg-blue-100">
                                    <a href="#" class="">App</a>
                                    <svg class="h-4 w-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/>
                                    </svg>
                                </div>
                                <a href="#" class="px-3 py-1 self-center ml-2 text-sm font-medium antialiased rounded bg-blue-800 text-white">Create</a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="flex items-center ml-4 md:ml-6">
                            <input type="text" class="hidden px-4 py-1 text-sm text-gray-600 border-2 rounded focus:outline-none focus:shadow-none lg:block" placeholder="Search ..." />
                         <button class="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
                               <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                             </svg>
                            </button>
                            <button class="p-1 ml-2 hover:text-blue-500 text-gray-700 border-2 border-transparent rounded-full hover:bg-blue-100 focus:outline-none" aria-label="Notifications">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 511.156 511.156" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112zM255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283C314.879 25.544 289.335 0 257.938 0h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36zM442.747 435.044H68.409c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z"/>
                                </svg>
                            </button>

                            <button class="p-1 ml-2 hover:text-blue-500 text-gray-700 border-2 border-transparent rounded-full hover:bg-blue-100 focus:outline-none" aria-label="Notifications">
                                <svg class="w-5 h-5" fill="currentColor"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 405.332c-11.777 0-21.332-9.555-21.332-21.332s9.555-21.332 21.332-21.332 21.332 9.555 21.332 21.332-9.555 21.332-21.332 21.332zm33.77-135.637c-7.551 3.477-12.438 11.094-12.438 19.395v9.578c0 11.773-9.535 21.332-21.332 21.332s-21.332-9.559-21.332-21.332v-9.578c0-24.899 14.633-47.723 37.227-58.156 21.738-10.004 37.437-36.567 37.437-49.602C309.332 151.937 285.418 128 256 128s-53.332 23.937-53.332 53.332c0 11.777-9.54 21.336-21.336 21.336S160 193.109 160 181.332c0-52.926 43.07-96 96-96s96 43.074 96 96c0 28.824-25.004 71.191-62.23 88.363zm0 0"/>
                                </svg>
                            </button>
                            <button class="p-1 ml-2 hover:text-blue-500 text-gray-700 border-2 border-transparent rounded-full hover:bg-blue-100 focus:outline-none" aria-label="Notifications">
                                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867">
                                    <path fill-rule="evenodd" d="M460.8 170.667h-28.894a203.036 203.036 0 00-8.226-19.934l20.48-20.48c6.663-6.664 6.663-17.468 0-24.132l-72.482-72.346c-6.665-6.663-17.468-6.663-24.132 0l-20.48 20.48a206.392 206.392 0 00-19.866-8.294V17.067C307.2 7.641 299.559 0 290.133 0h-102.4c-9.426 0-17.067 7.641-17.067 17.067v28.894a206.34 206.34 0 00-19.951 8.226l-20.48-20.48c-6.665-6.662-17.468-6.662-24.132 0l-72.329 72.482c-6.663 6.664-6.663 17.468 0 24.132l20.48 20.48a202.631 202.631 0 00-8.294 19.866H17.067C7.641 170.667 0 178.308 0 187.733v102.4c0 9.426 7.641 17.067 17.067 17.067h28.894a202.79 202.79 0 008.226 19.934l-20.48 20.48c-6.662 6.665-6.662 17.468 0 24.132l72.414 72.414c6.665 6.662 17.468 6.662 24.132 0l20.48-20.48a206.65 206.65 0 0019.934 8.226V460.8c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-28.894a206.34 206.34 0 0019.951-8.226l20.48 20.48c6.665 6.662 17.468 6.662 24.132 0l72.414-72.414c6.662-6.664 6.662-17.468 0-24.132l-20.48-20.48a202.67 202.67 0 008.209-19.934H460.8c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.425-7.641-17.066-17.067-17.066zM238.933 358.4c-65.98 0-119.467-53.487-119.467-119.467s53.487-119.467 119.467-119.467S358.4 172.954 358.4 238.933c-.075 65.949-53.518 119.392-119.467 119.467z"/>
                                </svg>
                            </button>

                            <div class="relative ml-2">
                                <button class="p-1 flex hover:bg-blue-100 items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                    <img class="w-6 h-6 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4E03AQH1yPpzWPPbwA/profile-displayphoto-shrink_100_100/0/1597572102197?e=1616630400&v=beta&t=bKny37OM7-qwl1IyJQNjKOj7wSeBmDE8ScYAto5Ul3s" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mr-2 md:hidden">
                        <button class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                            <svg class="block w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        </>
  );
}

export default Header;
