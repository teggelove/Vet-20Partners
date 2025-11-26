import { useState } from 'react';

export default function Index() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  return (
    <div className="min-h-screen bg-bfp-beige">
      {/* Sticky Top Banner and Header */}
      <div className="sticky top-0 z-50 bg-bfp-light-teal">
        {/* Top Banner */}
        <div className="relative z-10 bg-bfp-peach py-3 px-4 text-center mx-auto max-w-7xl">
          <p className="text-black text-sm md:text-base leading-tight">
            Share your photo on Insta and tag <span className="font-bold">@bestforpet</span> for your chance to win a Best for Pet Wellness Plan
          </p>
        </div>

        {/* Header */}
        <header className="relative z-10 bg-white rounded-b-xl mx-auto max-w-7xl px-4 md:px-8 md:h-[79px]">
      <div className="flex items-center justify-between py-2 md:py-0 gap-8 h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9d6873d8dd67480688359e25a4eb47cf%2F42c814d66f3d4d0a80524e4f17216525?format=webp&width=800"
            alt="bestforpet"
            className="h-16 md:h-24 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
          <a href="#" className="text-bfp-dark-emerald font-medium text-base hover:text-bfp-dark-teal transition-colors">
            Wellness Plan
          </a>
          <a href="#" className="text-bfp-dark-emerald font-medium text-base hover:text-bfp-dark-teal transition-colors">
            Book a vet
          </a>
          <a href="#" className="text-bfp-dark-emerald font-medium text-base hover:text-bfp-dark-teal transition-colors">
            Pet advice
          </a>
          <a href="#" className="text-bfp-dark-emerald font-medium text-base hover:text-bfp-dark-teal transition-colors">
            About
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
      </div>

      {/* Light Teal Background Section */}
      <div className="bg-bfp-light-teal relative">
        <svg className="absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0" viewBox="0 0 751 632" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M574.648 0.142915C492.284 3.34919 384.252 87.6764 340.532 129.439C307.548 125.775 224.593 116.356 178.68 120.96C121.288 126.714 13.5192 159.708 0.0241579 292.538C-1.20928 394.018 44.494 476.839 199.537 553.625C333.639 641.806 452.096 660.163 499.224 660.581C519.291 647.965 576.294 592.164 643.766 469.889C765.143 236.639 757.186 190.495 742.906 133.881C728.626 77.267 677.603 -3.86492 574.648 0.142915Z" fill="#66D7CF"/>
        </svg>

        {/* Hero Section */}
        <section className="relative">
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-bfp-dark-emerald font-bold text-4xl md:text-5xl lg:text-[48px] leading-[116%]">
                Heading text here
              </h1>
              <p className="text-bfp-dark-emerald text-lg md:text-xl leading-[134%]">
                Celebrate the festive season with your furry family and turn them into a cartoon.
              </p>
              <button className="bg-bfp-yellow text-bfp-dark-emerald font-bold px-7 py-4 rounded-full text-base hover:bg-bfp-yellow/90 transition-colors">
                Get started
              </button>
            </div>

            {/* Right Content - Polaroids */}
            <div className="relative h-[400px] md:h-[500px] hidden lg:block">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F9d6873d8dd67480688359e25a4eb47cf%2F9fd5a07c470e44f6a66b1e8dd1d32a49?format=webp&width=800" 
                alt="Pet polaroid collage" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* How it works Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-bfp-dark-emerald font-bold text-3xl md:text-[40px] leading-[116%] text-center mb-12">
            How it works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-5">
            {/* Snap */}
            <div className="bg-white rounded-xl py-8 px-[53px] flex flex-col">
              <div className="flex flex-col items-end gap-[13px]">
                <div className="flex justify-center items-center gap-2 w-full">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.75 35.75H8.25C7.52065 35.75 6.82118 35.4603 6.30546 34.9445C5.78973 34.4288 5.5 33.7293 5.5 33V13.75C5.5 13.0207 5.78973 12.3212 6.30546 11.8055C6.82118 11.2897 7.52065 11 8.25 11H13.75L16.5 6.875H27.5L30.25 11H35.75C36.4793 11 37.1788 11.2897 37.6945 11.8055C38.2103 12.3212 38.5 13.0207 38.5 13.75V33C38.5 33.7293 38.2103 34.4288 37.6945 34.9445C37.1788 35.4603 36.4793 35.75 35.75 35.75Z" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 28.875C25.4173 28.875 28.1875 26.1048 28.1875 22.6875C28.1875 19.2702 25.4173 16.5 22 16.5C18.5827 16.5 15.8125 19.2702 15.8125 22.6875C15.8125 26.1048 18.5827 28.875 22 28.875Z" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-black font-bold text-2xl leading-[116%]">Snap</h3>
                </div>
                <p className="text-black text-base leading-[116%] text-center w-full">
                  Snap a photo of you and your pet
                </p>
              </div>
            </div>

            {/* Load */}
            <div className="bg-white rounded-xl py-8 px-[57px] flex flex-col">
              <div className="flex flex-col items-start gap-[18px]">
                <div className="flex justify-center items-center gap-2 w-full">
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 21.9375V4.875" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32.9062 21.9375V31.6875H6.09375V21.9375" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.4062 10.9688L19.5 4.875L25.5938 10.9688" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-black font-bold text-2xl leading-[116%]">Load</h3>
                </div>
                <p className="text-black text-base leading-[116%] text-center w-full">
                  Upload it to our photo animator
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-xl py-8 px-[29px] flex flex-col">
              <div className="flex flex-col items-center gap-[18px]">
                <div className="flex justify-center items-center gap-2">
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.8125 23.1562L34.125 15.8438L26.8125 8.53125" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M29.25 32.9062H4.875V13.4062" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.9688 26.8125C11.7796 23.6719 13.6115 20.89 16.1763 18.9044C18.7411 16.9188 21.8932 15.8421 25.1367 15.8438H34.125" stroke="#00302D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-black font-bold text-2xl leading-[116%]">Share</h3>
                </div>
                <p className="text-black text-base leading-[116%] text-center w-full">
                  Share your Polaroid with friends and family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create your Christmas masterpiece Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bfp-dark-teal rounded-2xl p-6 md:p-12">
            <h2 className="text-white font-bold text-3xl md:text-[40px] leading-[116%] text-center mb-8">
              Create your masterpiece
            </h2>

            {/* Choose your style */}
            <div className="mb-12">
              <h3 className="text-white font-bold text-xl md:text-2xl text-center mb-6">
                Choose your style
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
                {[
                  { id: 1, label: 'Christmas 1' },
                  { id: 2, label: 'Christmas 2' },
                  { id: 3, label: "New Year's Eve" },
                  { id: 4, label: 'Beach' },
                  { id: 5, label: 'Backyard Cricket' },
                  { id: 6, label: 'Summer BBQ' }
                ].map((style) => (
                  <div
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`aspect-square bg-white rounded-xl transition-all cursor-pointer flex items-end justify-center p-4 ${
                      selectedStyle === style.id
                        ? 'ring-4 ring-bfp-yellow'
                        : 'hover:ring-4 hover:ring-bfp-yellow'
                    }`}
                  >
                    <span className="text-bfp-dark-emerald font-medium text-sm md:text-base text-center leading-tight">
                      {style.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload and Preview */}
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl text-center mb-8">
                Upload your photo and generate your polaroid
              </h3>

              <div className="grid lg:grid-cols-[481px_1fr] gap-6 items-start">
                {/* Upload Area */}
                <div className="bg-white rounded-xl border border-dashed border-black p-8 md:p-12 flex flex-col items-center justify-center space-y-3 h-[339px] hover:border-bfp-dark-teal transition-colors cursor-pointer">
                  <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43 48.375V10.75" stroke="#008D84" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M72.5625 48.375V69.875H13.4375V48.375" stroke="#008D84" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M29.5625 24.1875L43 10.75L56.4375 24.1875" stroke="#008D84" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4 className="text-black font-bold text-lg md:text-xl text-center">
                    Upload your pet photo
                  </h4>
                  <p className="text-black text-sm text-center">
                    Click to browse or drag and drop image
                  </p>
                </div>

                {/* Preview Area */}
                <div className="bg-white rounded-xl p-8 md:p-10 space-y-7">
                  <h4 className="text-black font-bold text-lg md:text-xl">
                    Polaroid preview
                  </h4>
                  <div className="bg-[#D9F9F3] rounded-lg p-12 md:p-20 flex items-center justify-center h-[446px]">
                    <p className="text-black text-lg md:text-xl text-center max-w-xs">
                      Your AI-generated image will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Spread the holiday cheer Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-5 text-center">
            {/* Heading */}
            <h2 className="text-bfp-dark-emerald font-bold text-2xl md:text-[32px] leading-[144%]">
              Spread the holiday cheer!
            </h2>

            {/* Description */}
            <p className="text-bfp-dark-emerald font-medium text-lg md:text-xl leading-[144%] max-w-2xl">
              Share this page with friends and family so they can create their own festive, AI-generated polaroid with their pets!
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a href="#" className="w-[74px] h-[74px] rounded-full bg-bfp-dark-teal flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0767 9.77516V14.3552H11.72V19.9552H15.0767V36.5985H21.9667V19.9568H26.5917C26.5917 19.9568 27.025 17.2718 27.235 14.3352H21.995V10.5052C21.995 9.9335 22.745 9.1635 23.4883 9.1635H27.245V3.3335H22.1383C14.905 3.3335 15.0767 8.9385 15.0767 9.77516V9.77516Z" fill="white"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="w-[74px] h-[74px] rounded-full bg-bfp-dark-teal flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3099 3.79167C12.3776 3.88282 11.0469 4.19271 9.8802 4.64844C8.67708 5.1224 7.67447 5.74219 6.65364 6.76303C5.63281 7.78386 5.01302 8.80469 4.55729 9.98959C4.10156 11.1563 3.80989 12.4688 3.71874 14.4193C3.6276 16.3698 3.60937 16.9896 3.6276 21.9297C3.6276 26.888 3.66406 27.5078 3.7552 29.4401C3.84635 31.3724 4.15624 32.7031 4.61197 33.8698C5.08593 35.0729 5.70572 36.0755 6.72656 37.0964C7.74739 38.099 8.76822 38.737 9.95312 39.1927C11.1198 39.6484 12.4323 39.9401 14.3828 40.0313C16.3333 40.1224 16.9531 40.1406 21.8932 40.1224C26.8516 40.1224 27.4713 40.0859 29.4036 39.9948C31.3359 39.9037 32.6667 39.5938 33.8333 39.138C35.0365 38.6641 36.0391 38.0443 37.0599 37.0234C38.0625 36.0026 38.7005 34.9818 39.1562 33.7969C39.612 32.6302 39.9036 31.3177 39.9948 29.3672C40.0859 27.4167 40.1042 26.7969 40.0859 21.8568C40.0859 16.8984 40.0495 16.2787 39.9583 14.3464C39.8672 12.4141 39.5573 11.0833 39.1016 9.91667C38.6276 8.71355 38.0078 7.71094 36.987 6.69011C35.9661 5.6875 34.9453 5.04948 33.7604 4.59375C32.5937 4.13803 31.2812 3.84636 29.3307 3.75521C27.3802 3.66407 26.7604 3.64584 21.8203 3.66407C16.862 3.66407 16.2422 3.70053 14.3099 3.79167M14.5286 36.75C12.7604 36.6771 11.7943 36.3854 11.138 36.1302C10.2812 35.8021 9.67968 35.401 9.04166 34.763C8.40364 34.125 8.0026 33.5234 7.67447 32.6667C7.41927 32.0287 7.1276 31.0625 7.03645 29.276C6.94531 27.362 6.92708 26.7787 6.90885 21.9115C6.90885 17.0443 6.90885 16.4609 6.99999 14.5469C7.07291 12.7787 7.36458 11.8125 7.61979 11.1563C7.94791 10.2995 8.34895 9.69792 8.98697 9.0599C9.62499 8.42188 10.2266 8.02084 11.0833 7.69271C11.7213 7.4375 12.6875 7.14584 14.474 7.05469C16.388 6.96355 16.9713 6.94532 21.8385 6.92709C26.7057 6.92709 27.2891 6.92709 29.2031 7.01823C30.9714 7.09115 31.9375 7.38282 32.5937 7.63803C33.4505 7.96615 34.0521 8.36719 34.6901 9.00521C35.3281 9.64323 35.7292 10.2448 36.0573 11.1016C36.3125 11.7396 36.6042 12.7057 36.6953 14.4922C36.7865 16.4063 36.8047 16.9896 36.8229 21.8568C36.8229 26.724 36.8229 27.3073 36.7318 29.2214C36.6588 30.9896 36.3672 31.9557 36.112 32.612C35.7838 33.4688 35.3828 34.0703 34.7448 34.7083C34.1068 35.3464 33.5052 35.7474 32.6484 36.0755C32.0104 36.3307 31.0443 36.6224 29.2578 36.7135C27.3437 36.8047 26.7604 36.8229 21.8932 36.8411C17.026 36.8411 16.4427 36.8412 14.5286 36.75M29.3854 12.1589C29.3854 13.362 30.3698 14.3464 31.5729 14.3464C32.776 14.3464 33.7604 13.362 33.7604 12.1589C33.7604 10.9557 32.776 9.97136 31.5729 9.97136C30.3698 9.97136 29.3854 10.9557 29.3854 12.1589ZM12.5052 21.9297C12.5052 27.1068 16.7161 31.2813 21.875 31.263C27.0521 31.263 31.2266 27.0521 31.2266 21.8932C31.2266 16.7162 27.0156 12.5417 21.8385 12.5599C16.6615 12.5599 12.487 16.7708 12.5052 21.9297M15.7865 21.9297C15.7865 18.5755 18.5026 15.8411 21.8568 15.8411C25.2109 15.8411 27.9453 18.5573 27.9453 21.9115C27.9453 25.2656 25.2292 28 21.875 28C18.5208 28 15.7865 25.2839 15.7865 21.9297Z" fill="white"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" className="w-[74px] h-[74px] rounded-full bg-bfp-dark-teal flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.5314 4.99316H34.6116L23.5155 17.7603L36.6169 35.0727H26.323L18.3017 24.5783L9.07735 35.0727H3.99725L15.8954 21.4367L3.32881 4.99316H13.8901L21.176 14.6186L29.5314 4.99316ZM27.7267 31.9979H30.5341L12.3527 7.86743H9.27788L27.7267 31.9979Z" fill="white"/>
                </svg>
              </a>

              {/* Email */}
              <a href="#" className="w-[74px] h-[74px] rounded-full bg-bfp-dark-teal flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.1084 0.0078125C34.3445 0.171991 36.918 2.84806 36.918 6.125V23.4092L36.9102 23.7246C36.7514 26.8564 34.2401 29.3675 31.1084 29.5264L30.793 29.5342H6.125L5.80957 29.5264C2.57342 29.3622 0 26.6861 0 23.4092V6.125C0 2.84804 2.57341 0.171974 5.80957 0.0078125L6.125 0H30.793L31.1084 0.0078125ZM4.02344 24.9766C4.50208 25.6173 5.26371 26.0342 6.125 26.0342H30.793C31.4183 26.0342 31.9915 25.8142 32.4424 25.4492L23.9863 16.9932C23.7556 17.137 23.5268 17.2762 23.2988 17.4072C21.7449 18.3001 20.0485 19.0087 18.459 19.0088C16.815 19.0087 15.0902 18.247 13.5322 17.3086C13.1617 17.0854 12.7887 16.843 12.4131 16.5869L4.02344 24.9766ZM33.418 8.89844C31.8494 10.556 30.0396 12.3088 28.1924 13.8711C27.76 14.2368 27.3223 14.5939 26.8828 14.9395L33.418 21.4746V8.89844ZM3.5 20.5518L9.60449 14.4463C9.28626 14.1812 8.9686 13.9123 8.65527 13.6387C6.82359 12.0392 5.03886 10.275 3.5 8.68457V20.5518ZM6.125 3.5C5.36532 3.5 4.68245 3.82404 4.20312 4.33984C6.01702 6.28397 8.45408 8.81636 10.957 11.002C12.4763 12.3285 13.9759 13.4901 15.3379 14.3105C16.7505 15.1614 17.7957 15.5087 18.459 15.5088C19.1109 15.5087 20.1506 15.1798 21.5547 14.373C22.9098 13.5944 24.4112 12.4841 25.9316 11.1982C28.4865 9.03748 30.9791 6.47371 32.7676 4.39941C32.2864 3.84926 31.5813 3.50001 30.793 3.5H6.125Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bfp-dark-emerald text-white py-10 px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F9d6873d8dd67480688359e25a4eb47cf%2F4548d829d8344370ae42fac3bae9e2eb?format=webp&width=800" 
                alt="bestforpet" 
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {/* Wellness Plan */}
              <div>
                <h3 className="font-bold text-base mb-4">Wellness Plan</h3>
                <ul className="space-y-2 text-sm leading-tight">
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">What's included?</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">How much can I save?</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Wellness Plan FAQs</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Member Pawtal</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-bold text-base mb-4">Services</h3>
                <ul className="space-y-2 text-sm leading-tight">
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Puppy School</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Pet Advice</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">24/7 Online Vet Support</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Offers and Promotions</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-bold text-base mb-4">Support</h3>
                <ul className="space-y-2 text-sm leading-tight">
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">FAQs</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Ways to pay in clinic</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Our Story</a></li>
                </ul>
              </div>

              {/* Book a vet */}
              <div>
                <h3 className="font-bold text-base mb-4">Book a vet</h3>
                <ul className="space-y-2 text-sm leading-tight">
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Find a Vet</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Find an emergency vet</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold text-base mb-4">Legal</h3>
                <ul className="space-y-2 text-sm leading-tight">
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Terms and Conditions</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-bfp-teal-accent transition-colors">Privacy Collection Notice</a></li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600"></div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs">
                © Copyright 2025 BestForPet. All rights reserved
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="#D6D6D6" viewBox="0 0 22 22">
                    <path d="M8.29217 5.37641V7.89541H6.446V10.9754H8.29217V20.1292H12.0817V10.9763H14.6254C14.6254 10.9763 14.8637 9.49958 14.9792 7.88441H12.0972V5.77791C12.0972 5.4635 12.5097 5.04 12.9186 5.04H14.9847V1.8335H12.1761C8.19775 1.8335 8.29217 4.91625 8.29217 5.37641V5.37641Z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="#D6D6D6" viewBox="0 0 23 23">
                    <path d="M7.52292 1.99327C6.50709 2.04119 5.8075 2.20411 5.19417 2.44369C4.56167 2.69286 4.03459 3.01869 3.49792 3.55536C2.96125 4.09202 2.63542 4.62869 2.39584 5.25161C2.15625 5.86494 2.00292 6.55494 1.955 7.58036C1.90709 8.60577 1.8975 8.93161 1.90709 11.5287C1.90709 14.1354 1.92625 14.4612 1.97417 15.477C2.02209 16.4929 2.185 17.1924 2.42459 17.8058C2.67375 18.4383 2.99959 18.9654 3.53625 19.502C4.07292 20.0291 4.60959 20.3645 5.2325 20.6041C5.84584 20.8437 6.53584 20.997 7.56125 21.0449C8.58667 21.0929 8.9125 21.1024 11.5096 21.0929C14.1163 21.0929 14.4421 21.0737 15.4579 21.0258C16.4738 20.9779 17.1733 20.8149 17.7867 20.5754C18.4192 20.3262 18.9463 20.0004 19.4829 19.4637C20.01 18.927 20.3454 18.3904 20.585 17.7674C20.8246 17.1541 20.9779 16.4641 21.0258 15.4387C21.0738 14.4133 21.0833 14.0874 21.0738 11.4904C21.0738 8.88369 21.0546 8.55786 21.0067 7.54202C20.9588 6.52619 20.7958 5.82661 20.5563 5.21327C20.3071 4.58077 19.9813 4.05369 19.4446 3.51702C18.9079 2.98994 18.3713 2.65452 17.7483 2.41494C17.135 2.17536 16.445 2.02202 15.4196 1.97411C14.3942 1.92619 14.0683 1.91661 11.4713 1.92619C8.86459 1.92619 8.53875 1.94536 7.52292 1.99327M7.63792 19.3199C6.70834 19.2816 6.20042 19.1283 5.85542 18.9941C5.405 18.8216 5.08875 18.6108 4.75334 18.2754C4.41792 17.9399 4.20709 17.6237 4.03459 17.1733C3.90042 16.8379 3.74709 16.3299 3.69917 15.3908C3.65125 14.3845 3.64167 14.0779 3.63209 11.5191C3.63209 8.96036 3.63209 8.65369 3.68 7.64744C3.71834 6.71786 3.87167 6.20994 4.00584 5.86494C4.17834 5.41452 4.38917 5.09827 4.72459 4.76286C5.06 4.42744 5.37625 4.21661 5.82667 4.04411C6.16209 3.90994 6.67 3.75661 7.60917 3.70869C8.61542 3.66077 8.92209 3.65119 11.4808 3.64161C14.0396 3.64161 14.3463 3.64161 15.3525 3.68952C16.2821 3.72786 16.79 3.88119 17.135 4.01536C17.5854 4.18786 17.9017 4.39869 18.2371 4.73411C18.5725 5.06952 18.7833 5.38577 18.9558 5.83619C19.09 6.17161 19.2433 6.67952 19.2913 7.61869C19.3392 8.62494 19.3488 8.93161 19.3583 11.4904C19.3583 14.0491 19.3583 14.3558 19.3104 15.362C19.2721 16.2916 19.1188 16.7995 18.9846 17.1445C18.8121 17.5949 18.6013 17.9112 18.2658 18.2466C17.9304 18.582 17.6142 18.7929 17.1638 18.9654C16.8283 19.0995 16.3204 19.2529 15.3813 19.3008C14.375 19.3487 14.0683 19.3583 11.5096 19.3679C8.95084 19.3679 8.64417 19.3679 7.63792 19.3199M15.4483 6.39202C15.4483 7.02452 15.9658 7.54202 16.5983 7.54202C17.2308 7.54202 17.7483 7.02452 17.7483 6.39202C17.7483 5.75952 17.2308 5.24202 16.5983 5.24202C15.9658 5.24202 15.4483 5.75952 15.4483 6.39202ZM6.57417 11.5287C6.57417 14.2504 8.78792 16.4449 11.5 16.4354C14.2217 16.4354 16.4163 14.2216 16.4163 11.5095C16.4163 8.78786 14.2025 6.59327 11.4808 6.60286C8.75917 6.60286 6.56459 8.81661 6.57417 11.5287M8.29917 11.5287C8.29917 9.76536 9.72709 8.32786 11.4904 8.32786C13.2538 8.32786 14.6913 9.75577 14.6913 11.5191C14.6913 13.2824 13.2633 14.7199 11.5 14.7199C9.73667 14.7199 8.29917 13.292 8.29917 11.5287Z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-5 h-5" fill="#D6D6D6" viewBox="0 0 18 18">
                    <path d="M14.4911 4.17164C14.3772 4.11277 14.2663 4.04824 14.1588 3.97828C13.8464 3.77172 13.5599 3.52833 13.3056 3.25336C12.6693 2.52527 12.4316 1.78664 12.3441 1.26949H12.3476C12.2745 0.840234 12.3047 0.5625 12.3093 0.5625H9.41099V11.7696C9.41099 11.9201 9.41099 12.0688 9.40466 12.2157C9.40466 12.234 9.4029 12.2509 9.40185 12.2706C9.40185 12.2787 9.40185 12.2871 9.40009 12.2955C9.40009 12.2977 9.40009 12.2998 9.40009 12.3019C9.36954 12.704 9.24064 13.0924 9.02473 13.433C8.80882 13.7736 8.51252 14.0559 8.16189 14.2552C7.79645 14.4631 7.38314 14.5721 6.96271 14.5716C5.61236 14.5716 4.51794 13.4705 4.51794 12.1106C4.51794 10.7508 5.61236 9.64969 6.96271 9.64969C7.21832 9.64945 7.47236 9.68967 7.7154 9.76887L7.71892 6.81785C6.98112 6.72255 6.23157 6.78118 5.51756 6.99006C4.80356 7.19894 4.14059 7.55352 3.57048 8.03145C3.07093 8.46548 2.65096 8.98337 2.32946 9.5618C2.20712 9.77273 1.74552 10.6204 1.68962 11.996C1.65446 12.7768 1.88896 13.5858 2.00075 13.9201V13.9271C2.07107 14.124 2.34353 14.7959 2.78755 15.3622C3.14559 15.8165 3.56861 16.2156 4.04298 16.5466V16.5396L4.05001 16.5466C5.4531 17.5001 7.00876 17.4375 7.00876 17.4375C7.27806 17.4266 8.18017 17.4375 9.20462 16.952C10.3409 16.4138 10.9877 15.6118 10.9877 15.6118C11.401 15.1327 11.7296 14.5866 11.9595 13.9971C12.2217 13.3077 12.3093 12.4808 12.3093 12.1504V6.20473C12.3444 6.22582 12.8127 6.53555 12.8127 6.53555C12.8127 6.53555 13.4874 6.96797 14.5399 7.24957C15.2951 7.44996 16.3125 7.49215 16.3125 7.49215V4.61496C15.956 4.65363 15.2322 4.54113 14.4911 4.17164Z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="#D6D6D6" viewBox="0 0 24 24">
                    <path d="M21.62 7.1502C21.39 6.2802 20.71 5.6002 19.85 5.3702C18.29 4.9502 12.04 4.9502 12.04 4.9502C12.04 4.9502 5.79001 4.9502 4.23001 5.3702C3.37001 5.6002 2.69001 6.2802 2.46001 7.1502C2.04001 8.7202 2.04001 12.0002 2.04001 12.0002C2.04001 12.0002 2.04001 15.2802 2.46001 16.8502C2.69001 17.7202 3.37001 18.4002 4.23001 18.6302C5.79001 19.0502 12.04 19.0502 12.04 19.0502C12.04 19.0502 18.29 19.0502 19.85 18.6302C20.71 18.4002 21.39 17.7202 21.62 16.8502C22.04 15.2802 22.04 12.0002 22.04 12.0002C22.04 12.0002 22.04 8.7202 21.62 7.1502V7.1502ZM9.99001 14.9702V9.0202L15.22 11.9902L9.99001 14.9602V14.9702Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
