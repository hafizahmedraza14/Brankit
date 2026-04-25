import React from 'react'
import Process1 from '../../assets/Onboarded-Process-Design-01-1.png'
import Process2 from '../../assets/Onboarded-Process-Design-02-1.png'
import Process3 from '../../assets/Onboarded-Process-Design-03-1.png'
import { FaRegHandSpock } from 'react-icons/fa'
import { CgNotes } from 'react-icons/cg'
import { IoMdSettings } from 'react-icons/io'

const Process = () => {
  return (
    <div>
        <>
        <section className='bg-[#190E45] pt-20 pb-10'>
            <div>
                <div>
                    <div className='flex flex-col items-center justify-center pb-10'>
                        <h2 className='text-white text-[2.5rem] font-bold text-center'>Onboarding Process</h2>
                        <h1 className=' text-[6.25rem]/26 font-bold text-[#190E45] text-center [text-shadow:0px_0px_5px_#9479FF]'>No More Surprises</h1>
                    </div>
                    <div className='flex items-center justify-center gap-10 pb-20 border-b border-[#9479FF] px-20'>
                        <div className='w-1/2'>
                            <img src={Process1} alt="Onboarding Process" />
                        </div>
                        <div className='w-1/2'>
                            <div>
                                <ul><li className='text-[#75CFF0] text-[1.325rem] font-bold'>. Step One</li></ul>
                                <h2 className='text-[#9479FF] text-[3.500rem]/17 font-bold mb-4'>Complete Brand<br/> Audit​</h2>
                                <h4 className='text-[#75CFF0] text-[1.325rem] font-bold'>– Getting to Know You</h4>
                                <p className='text-white text-[1.125rem] mt-4'>Brankit evaluates your current position, strengths and weaknesses to identify key points of improvement for brand growth.</p>
                                <div className='flex items-center gap-7 mt-6'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <FaRegHandSpock className='bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                        <h6 className='text-[#9479FF] text-md'>Hello Sessions</h6>
                                    </div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <CgNotes className='bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                        <h6 className='text-[#9479FF] text-md'>Sales Channel's Audit</h6>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-5 items-center'>
                                    <IoMdSettings className='text-center bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                    <h6 className='text-[#9479FF] text-md'>Operations Overviews</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-10 py-20 px-20'>
                        <div className='w-1/2'>
                            <div>
                                <ul><li className='text-[#F3991F] text-[1.325rem] font-bold'>. Step Two</li></ul>
                                <h2 className='text-[#9479FF] text-[3.500rem]/17 font-bold mb-4'>Setting Goals Objectives & Strategic Planning​</h2>
                                <h4 className='text-[#F3991F] text-[1.325rem] font-bold'>– -Realistic Expectations & Timelines</h4>
                                <p className='text-white text-[1.125rem] mt-4'>Our team develops a custom roadmap tailored to your growth targets, platform mix, and operational pain points. This includes software integration, automation workflows, and forecasting models.</p>
                                <div className='flex items-center gap-7 mt-6'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <FaRegHandSpock className='bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                        <h6 className='text-[#9479FF] text-md'>Process Flowchart</h6>
                                    </div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <CgNotes className='bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                        <h6 className='text-[#9479FF] text-md'>Detailed Call</h6>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-5 items-center'>
                                    <IoMdSettings className='text-center bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                    <h6 className='text-[#9479FF] text-md'>Set Milestones</h6>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src={Process2} alt="Onboarding Process" />
                        </div>
                    </div>
                     <div className='flex items-center justify-center gap-10 pt-20 border-t border-[#9479FF] px-20'>
                        <div className='w-1/2'>
                            <img src={Process3} alt="Onboarding Process" />
                        </div>
                        <div className='w-1/2'>
                            <div>
                                <ul><li className='text-[#E5196F] text-[1.325rem] font-bold'>. Step Three</li></ul>
                                <h2 className='text-[#9479FF] text-[3.500rem]/17 font-bold mb-4'>Execution​</h2>
                                <h4 className='text-[#E5196F] text-[1.325rem] font-bold'>– Our Secret Sauce to Success</h4>
                                <p className='text-white text-[1.125rem] mt-4'>We collaborate closely with your team to turn strategic plans into action, ensuring every move aligns with your overarching brand objectives. By implementing high-impact tools and streamlined processes, we eliminate inefficiencies and equip your team with scalable systems for long-term growth.</p>
                                <div className='flex items-center gap-7 mt-6'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <FaRegHandSpock className='bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                        <h6 className='text-[#9479FF] text-md'>Operational Automation</h6>
                                    </div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <CgNotes className='bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                        <h6 className='text-[#9479FF] text-md'>Supply Chain Strategy</h6>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-5 items-center'>
                                    <IoMdSettings className='text-center bg-[#321C88] border-2 border-[#9479FF] text-[#9479FF] w-11 h-11 p-2 rounded-full' />
                                    <h6 className='text-[#9479FF] text-md'>Progress Monitoring</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    </div>
  )
}

export default Process
