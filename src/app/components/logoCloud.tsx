const logos = [
  {url: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg", altText:"Transistor" },
  {url: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg", altText: "Reform"},
  {url: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg", altText:"Tuple"},
  {url: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg", altText:"SavvyCal"},
  {url: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg", altText:"Statamic"}
]

export default function LogoCloud() {
    return (
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world's most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
           {
            logos.map((logo)=>{
              return(
                <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={logo.url}
                alt={logo.altText}
                width={158}
                height={48}
              />);
            })
           }
          </div>
        </div>
      </div>
    )
  }
  