import React, { useRef } from 'react'
import { useState } from 'react'

const Hero = () => {

    // 0 % 4 = 0 + 1 = 1
    // 1 % 4 = 1 + 1 = 2
    // 2 % 4 = 2 + 1 = 3
    // 3 % 4 = 3 + 1 = 4
    // 4 % 4 = 0 + 1 = 1
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)
    const nextVideoRef = useRef(null)
    
    const getVideoSource = (index) => `videos/hero-${index}.mp4`;

    const totalVideos = 4;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1)
    }

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

//

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-700 ease-in-out hover:scale-100 opacity-100'>
                            <video
                                ref={nextVideoRef}
                                src={getVideoSource(currentIndex + 1)}
                                loop
                                muted
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero