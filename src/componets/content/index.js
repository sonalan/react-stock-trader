import React from 'react';
import Home from "./home";
import Stats from "../stats";

const  Content = () => {
    return (
        <>
            <Home />
            <h1 className="text-5xl text-center text-gray-900 text-white mb-10 mt-10">
                Invest your way
                <br/>
            </h1>
            <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
                <div className="w-full lg:w-2/3">
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Integer commodo, sapien ut vulputate viverra
                                </div>
                                <p className="text-gray-700 text-base">
                                    Nam malesuada aliquet metus, ac commodo augue mollis sit amet.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                    Proin consequat ullamcorper eleifend.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                                </div>
                                <p className="text-gray-700 text-base">
                                    Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui,
                                    vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Integer commodo, sapien ut vulputate viverra
                                </div>
                                <p className="text-gray-700 text-base">
                                    Nam malesuada aliquet metus, ac commodo augue mollis sit amet.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                    Proin consequat ullamcorper eleifend.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                                </div>
                                <p className="text-gray-700 text-base">
                                    Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui,
                                    vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Integer commodo, sapien ut vulputate viverra
                                </div>
                                <p className="text-gray-700 text-base">
                                    Nam malesuada aliquet metus, ac commodo augue mollis sit amet.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                    Proin consequat ullamcorper eleifend.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                                </div>
                                <p className="text-gray-700 text-base">
                                    Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui,
                                    vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded w-full lg:flex mb-10 ml-5">
                        <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                             style={{backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')"}}
                             title="deit is very important">
                        </div>
                        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                            <div>
                                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                    Integer commodo, sapien ut vulputate viverra
                                </div>
                                <p className="text-gray-700 text-base">
                                    Nam malesuada aliquet metus, ac commodo augue mollis sit amet.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                    Proin consequat ullamcorper eleifend.
                                    Nam bibendum risus sit amet metus semper consectetur.
                                </p>
                            </div>
                            <div className="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                                     alt=""
                                     className="h-10 w-10 rounded-full mr-2 object-cover"/>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-3">
                    <Stats/>
                </div>
            </div>
        </>
    );
}

export default Content;
