export default function Index() {
  return (
    <div className="min-h-screen bg-bfp-beige">
      {/* Light Teal Background Section */}
      <div className="bg-bfp-light-teal relative overflow-hidden">
        <svg className="absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0" viewBox="0 0 751 632" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M574.648 0.142915C492.284 3.34919 384.252 87.6764 340.532 129.439C307.548 125.775 224.593 116.356 178.68 120.96C121.288 126.714 13.5192 159.708 0.0241579 292.538C-1.20928 394.018 44.494 476.839 199.537 553.625C333.639 641.806 452.096 660.163 499.224 660.581C519.291 647.965 576.294 592.164 643.766 469.889C765.143 236.639 757.186 190.495 742.906 133.881C728.626 77.267 677.603 -3.86492 574.648 0.142915Z" fill="#66D7CF"/>
        </svg>

        {/* Top Banner */}
        <div className="relative z-10 bg-bfp-peach py-3 px-4 text-center mx-auto max-w-7xl">
          <p className="text-black text-sm md:text-base leading-tight">
            Share your photo & tag us on social for your chance to win a Best for Pet Wellness Plan Membership #BestforPetXmas
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
              Services
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
                Start creating
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
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Snap */}
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-11 h-11">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F9d6873d8dd67480688359e25a4eb47cf%2Fde5ba01fb23c4fe286c5461376c55810?format=webp&width=800" alt="Camera" className="w-full h-full" />
              </div>
              <h3 className="text-black font-bold text-2xl">Snap</h3>
              <p className="text-black text-base leading-[116%]">
                Snap a photo of you and your pet
              </p>
            </div>

            {/* Load */}
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-10 h-10">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F9d6873d8dd67480688359e25a4eb47cf%2F0de84fbb4ce644e8aba9635f17273765?format=webp&width=800" alt="Upload" className="w-full h-full" />
              </div>
              <h3 className="text-black font-bold text-2xl">Load</h3>
              <p className="text-black text-base leading-[116%]">
                Upload it to our photo animator
              </p>
            </div>

            {/* Share */}
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-10 h-10">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F9d6873d8dd67480688359e25a4eb47cf%2F12831d29385a4d7391d6e76de7bacc6e?format=webp&width=800" alt="Share" className="w-full h-full" />
              </div>
              <h3 className="text-black font-bold text-2xl">Share</h3>
              <p className="text-black text-base leading-[116%]">
                Share your Polaroid with friends and family
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create your Christmas masterpiece Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bfp-dark-teal rounded-2xl p-6 md:p-12">
            <h2 className="text-white font-bold text-3xl md:text-[40px] leading-[116%] text-center mb-8">
              Create your Christmas masterpiece
            </h2>

            {/* Choose your style */}
            <div className="mb-12">
              <h3 className="text-white font-bold text-xl md:text-2xl text-center mb-6">
                Choose your style
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-white rounded-xl hover:ring-4 hover:ring-bfp-yellow transition-all cursor-pointer"></div>
                ))}
              </div>
            </div>

            {/* Upload and Preview */}
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl text-center mb-8">
                Upload your image and generate your polaroid
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Upload Area */}
                <div className="bg-white rounded-xl border-2 border-dashed border-black p-8 md:p-12 flex flex-col items-center justify-center space-y-4 min-h-[340px] hover:border-bfp-dark-teal transition-colors cursor-pointer">
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
                <div className="bg-white rounded-xl p-6 md:p-8 space-y-6">
                  <h4 className="text-black font-bold text-lg md:text-xl text-center">
                    Christmas polaroid preview
                  </h4>
                  <div className="bg-bfp-light-teal rounded-lg p-8 md:p-16 flex items-center justify-center min-h-[400px]">
                    <p className="text-black text-lg md:text-xl text-center">
                      Your AI-generated Christmas image will appear here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="mt-8 bg-bfp-teal-accent rounded-b-2xl -mx-6 md:-mx-12 -mb-6 md:-mb-12 py-6 px-6">
              <p className="text-bfp-dark-emerald text-center text-lg md:text-2xl leading-[115%]">
                <span className="font-bold">Share your photo & tag us on social </span>
                <span>for your chance to win a Best for Pet Wellness Plan Membership</span>
                <span className="font-bold"> #BestforPetXmas</span>
              </p>
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
