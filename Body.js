function Body (){
    const videos = [
        {
          id: 1,
          title: "How I Cracked 3 FAANGs Without a CS Degree",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/Zzpvn59xJJo?si=6wFTuOe0JD6UPyd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 2300,
          views: 49000,
          channelName: "Power Couple",
          channelLogoUrl: "https://yt3.googleusercontent.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 2,
          title: "What is Web Development ? Complete RoadMap from Basics to Advanced | 2023",
          thumbnailUrl: <iframe  className="video" src="https://www.youtube.com/embed/z0n1aQ3IxWI?si=lGF_AXsB48RbocMt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 14000,
          views: 192000,
          channelName: "Apna College",
          channelLogoUrl: "https://yt3.googleusercontent.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 3,
          title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/8hly31xKli0?si=DTmzQ3Wp19NhgJDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 106000,
          views: 3700000,
          channelName: "freeCodeCamp.org",
          channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YBGOSw=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 4,
          title: "",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/xF554Tlzo-c?si=SmVU354BU4rxYtUd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 65000,
          views: 1900000,
          channelName: "Power Couple",
          channelLogoUrl: "https://yt3.googleusercontent.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 5,
          title: "My Brain after 569 Leetcode Problems",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/8wysIxzqgPI?si=nUKaA_Rr88Xmj5rq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 69000,
          views: 1600000,
          channelName: "NeetCode",
          channelLogoUrl: "https://yt3.googleusercontent.com/FqiGBOsNpeWbNw20ULboW0jy88JdpqFO9a-YRJ0C2oc4lZ8uoHYJ38PWSkrjdC_zQgNW9pGU=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 6,
          title: "CHANDRAYAAN 3 LANDS ON MOON | World Congratulates India on making HISTORY",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/oxoPno0kf4w?si=WOAPoe_K7hf2_U2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 125000,
          views: 1400000,
          channelName: "World Affairs",
          channelLogoUrl: "https://yt3.googleusercontent.com/k5Lj-iJQyPZDtqO1yJJCgTWP8V8O6Rd3ktM5OkFEz7fDm0aTgsy7PJs7AUUSPMflxlTz9G92=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 7,
          title: "All World Maps are WRONG! What is the ACTUAL Size of India? ",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/CIPSM-nJOnM?si=R55opy9KVHjD6Q0V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 94000,
          views: 2100000,
          channelName: "World Affairs",
          channelLogoUrl: "https://yt3.googleusercontent.com/k5Lj-iJQyPZDtqO1yJJCgTWP8V8O6Rd3ktM5OkFEz7fDm0aTgsy7PJs7AUUSPMflxlTz9G92=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 8,
          title: "FIRST TIME A COUNTRY HAS DONE THIS | 100 Billion dollars in Remittance to India says World bank",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/PcukLktbPNM?si=3j2Ro_fySj8yG10I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 73000,
          views: 1500000,
          channelName: "World Affairs",
          channelLogoUrl: "https://yt3.googleusercontent.com/k5Lj-iJQyPZDtqO1yJJCgTWP8V8O6Rd3ktM5OkFEz7fDm0aTgsy7PJs7AUUSPMflxlTz9G92=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 9,
          title: "Putin wants to Copy MAKE IN INDIA | Huge Praise for India from Russian President",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/doOIfYUAWMo?si=ZyDVLuKDImWC52ER" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 58000,
          views: 988000,
          channelName: "World Affairs",
          channelLogoUrl: "https://yt3.googleusercontent.com/k5Lj-iJQyPZDtqO1yJJCgTWP8V8O6Rd3ktM5OkFEz7fDm0aTgsy7PJs7AUUSPMflxlTz9G92=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 10,
          title: "MERN Stack Tutorial - Book Store Project",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/-42K44A1oMA?si=IdbnSPtrpplLqR9f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 2900,
          views: 91000,
          channelName: "freeCodeCamp.org",
          channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YBGOSw=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 11,
          title: "Build a COMPLETE Fullstack Responsive MERN App with Auth, Likes, Dark Mode",
          thumbnailUrl:<iframe className="video" src="https://www.youtube.com/embed/K8YELRmUb5o?si=RoBy8_y1P30zdZ7B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ,
          likes: 21000,
          views: 781000,
          channelName: "EdRoh",
          channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKYrXOXt3zsxH-47929ehw1NFYJg_uXsLTF6ILO1=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 12,
          title: "5 Best Coding Project To Get A High Paying Job In 2023(Build In A Week)",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/eZT8RUuWvR8?si=d-E8gT0e4aj_baLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 4500,
          views: 99000,
          channelName: "Harkirat Singh",
          channelLogoUrl: "https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 13,
          title: "The Startup Challenge | Episode - 1 | Masters' Union Demo Day With Cohort'23 Students",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/P-29IlOhbzg?si=ms8xq7n1U-jo-byV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 2000,
          views: 58000,
          channelName: "Masters' Union",
          channelLogoUrl: "https://yt3.googleusercontent.com/GyxO3Mplkm1LhJLFDnExlu_HSH38d3O-s4y3cixMthzaSGJvm_JY53BgpqaaoTCquyV3aCsVsw=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 14,
          title: "Building & Boosting Community In The Digital Age |",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/gMdqtXyByVY?si=mjvmgM_VqLrYvf0V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 150,
          views: 3900,
          channelName: "Masters' Union",
          channelLogoUrl: "https://yt3.googleusercontent.com/GyxO3Mplkm1LhJLFDnExlu_HSH38d3O-s4y3cixMthzaSGJvm_JY53BgpqaaoTCquyV3aCsVsw=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 15,
          title: "Post MBA: Choosing Bain Vs Starting Up",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/7IXWTXdxeBs?si=KN9DRNr9aCd4NM24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 155,
          views: 4700,
          channelName: "Masters' Union",
          channelLogoUrl: "https://yt3.googleusercontent.com/GyxO3Mplkm1LhJLFDnExlu_HSH38d3O-s4y3cixMthzaSGJvm_JY53BgpqaaoTCquyV3aCsVsw=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 16,
          title: "G20 Summit Delhi Live: PM Modi receives world leaders at Bharat Mandapam",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/SVB66nWk9dQ?si=818pegMaVtOg0YIu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 125000,
          views: 5100000,
          channelName: "Narendra Modi",
          channelLogoUrl: "https://yt3.googleusercontent.com/iogG8RVPb49OyvLtnJJ61ltWouozunOuFN94GhByYUDZiMCNpjjDTVJtc8-hUAHk-uN8MrQyC1o=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 17,
          title: "Vibrant Rail & Road Infra for Chhattisgarh| PM Modi",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/56AxVT8dsVw?si=xOA2RkMUnvSWlsCn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 100,
          views: 1000,
          channelName: "Narendra Modi",
          channelLogoUrl: "https://yt3.googleusercontent.com/iogG8RVPb49OyvLtnJJ61ltWouozunOuFN94GhByYUDZiMCNpjjDTVJtc8-hUAHk-uN8MrQyC1o=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 18,
          title: "Shri Narendra Modi's exclusive interview with India TV's Rajat Sharma ",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/PKl1-V0lm_0?si=6o54qQYB_xgSzAMZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 438000,
          views: 7400000,
          channelName: "Narendra Modi",
          channelLogoUrl: "https://yt3.googleusercontent.com/iogG8RVPb49OyvLtnJJ61ltWouozunOuFN94GhByYUDZiMCNpjjDTVJtc8-hUAHk-uN8MrQyC1o=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 19,
          title: "Bhagavad Gita Telugu All Chapters",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/FFtPSPByBmk?si=phIX4iu6Rtl0eTup" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 28000,
          views: 1800000,
          channelName: "Spiritual Gurus",
          channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKa5rMtLAf_Rakrv2wrRgr3m0SVrvG0NahZg7aFgDA=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 20,
          title: "Bhagavatam in Telugu by chaganti Part 1",
          thumbnailUrl: <iframe className="video" src="https://www.youtube.com/embed/kDd5R-8p_WQ?si=ijVxDC14S1dTSJDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
          likes: 7700,
          views: 721000,
          channelName: "Spiritual Gurus",
          channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKa5rMtLAf_Rakrv2wrRgr3m0SVrvG0NahZg7aFgDA=s176-c-k-c0x00ffffff-no-rj",
         },
         {
          id: 21,
          title: "Will India become an economic superpower? | Business Beyond",
          thumbnailUrl:<iframe className="video" src="https://www.youtube.com/embed/c_SEBHQTGJw?si=eILRaucr2CdAshhX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ,
          likes: 10000,
          views: 553000,
          channelName: "DW News",
          channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbjkhiNpXncTV-z10iJXGALSRFdwS9RBH3BERLv9vQ=s176-c-k-c0x00ffffff-no-rj",
         },
    ]
    return(
        <div className="body">
            <div className="card-container">
                {
                    videos.map( (item) => {
                        return(
                        <div className="card">
                            <div className="channel">
                                <h4>{item.channelName}</h4>
                                <img src={item.channelLogoUrl}/>
                            </div>
                            {item.thumbnailUrl}
                            <h3>{item.title}</h3>
                            <div className="views">
                                <p>Views : {item.views}</p>
                                <p>Likes : {item.likes}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Body;