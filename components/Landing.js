import Connect from "../components/ConnectButton";
import LandingConnect from "../components/Buttons/LandingConnect";
import Create from "./ModalCreateBox";

export default function Landing() {
  return (
    <section className="text-gray-600 body-font">
      <div className="mt-0 lg:mt-32 max-w-8xl mx-auto flex justify-center transform  pt-24 pb-2  md:pb-12 lg:pb-36 mb-1 lg:mb-12 lg:flex-row flex-col">
        <div className="transform -translate-y-3 lg:translate-x-16">
          <div className="  flex flex-col justify-end">
            <div className="relative font-medium text-8xl pb-3 Avenir tracking-tighter text-gray-900 flex mx-auto lg:mx-0">
              illoMX
              <span className="absolute text-base font-light text-gray-200 tracking-tight text-normal transform -translate-x-1 left-56 translate-y-20">
                beta
              </span>
            </div>

            <p className="mb-1 lg:w-full text-gray-800 text-lg tracking-tight font-normal flex mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z" />
              </svg>
              <span className="pl-3">Ultra Low-Fee NFT Marketplace</span>
            </p>
            <p className="mb-1 lg:w-full text-gray-800 text-lg tracking-tight font-normal flex mx-auto">
              <svg
                width="30"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              >
                <path d="M7.458 8.084l.405-.916c.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265l.405.916c.375-.936.806-2.016 1.3-3.267.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.873 2.209 1.547 3.885 2.069 5.179 1.571 3.91 1.773 4.413 1.773 5.603 0 2.388-1.42 4.402-3.5 5.04v2.39h3.5v1h-24v-1h3.5v-2.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.494 1.251.925 2.331 1.3 3.267zm7.915 11.197c-.569.331-1.199.581-1.873.733v3.015h4v-2.39c-.83-.254-1.555-.728-2.127-1.358zm-6.746 0c-.572.63-1.297 1.104-2.127 1.358v2.39h4v-3.015c-.674-.152-1.304-.402-1.873-.733zm3.873 3.734v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-5.606-13.65c-1.264-3.153-1.639-4.117-1.664-4.167-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c.975-.209 1.729-.615 2.282-1.152-1.409-1.152-2.282-2.868-2.282-4.765 0-1.17.18-1.789 1.394-4.567zm9.323 9.332c.556.538 1.311.943 2.283 1.152v3.166h1v-3.166c2.448-.527 3.5-2.29 3.5-4.25 0-.997-.161-1.397-1.703-5.23-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.026.046-.27.697-1.663 4.167 1.214 2.778 1.394 3.397 1.394 4.567 0 1.897-.873 3.613-2.283 4.765z" />
              </svg>

              <span className="pl-3">Environmentally Friendly Blockchain</span>
            </p>
            <p className="mb-1 lg:w-full text-gray-800 text-lg tracking-tight font-normal flex mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 24 24"
              >
                <path d="M16.835 0c-1.656 0-3 1.344-3 2.999s1.344 2.999 3 2.999c1.655 0 3-1.344 3-2.999s-1.345-2.999-3-2.999m0 1c1.103 0 2 .896 2 1.999 0 1.103-.897 2-2 2s-2-.897-2-2 .897-1.999 2-1.999m-9.669-1c-1.656 0-3 1.344-3 2.999s1.344 2.999 3 2.999c1.655 0 3-1.344 3-2.999s-1.345-2.999-3-2.999m0 1c1.103 0 2 .896 2 1.999 0 1.103-.897 2-2 2s-2-.897-2-2 .897-1.999 2-1.999m9.648 14.828c.694 0 1.231.524 1.277 1.245.05.741.172 2.201.28 3.489l.156 1.896c.02.251.164.542.508.542.404 0 .455-.425.46-.556l.472-11.447c.022-.512.701-.655.937-.222l1.645 2.977c.118.215.451.125.451-.117l-1.6-5.675c-.093-.335-.402-.567-.749-.567h-17.303c-.346 0-.655.232-.749.566l-1.59 5.61c-.022.402.364.326.442.183l1.645-2.977c.244-.439.916-.283.937.222l.471 11.448c.011.256.146.555.49.555.329 0 .497-.271.518-.541l.16-1.94c.107-1.277.227-2.712.277-3.448.047-.719.584-1.243 1.277-1.243.584 0 1.218.465 1.27 1.244.049.734.169 2.169.276 3.446l.16 1.94c.019.251.161.542.499.542.382 0 .439-.389.446-.556.122-2.956.629-12.29.635-12.384.014-.266.233-.473.499-.473h1.963c.266 0 .485.208.499.474.006.094.494 9.427.617 12.384.012.276.174.555.509.555.344 0 .49-.291.508-.541l.165-1.982c.105-1.266.223-2.679.272-3.406.052-.778.687-1.243 1.27-1.243m2.222 8.172c-.807 0-1.44-.616-1.506-1.465-.035-.455-.092-1.143-.155-1.889-.108-1.294-.231-2.761-.282-3.507-.015-.231-.154-.311-.279-.311-.079 0-.256.078-.272.31-.049.731-.168 2.15-.274 3.422-.066.779-.126 1.502-.163 1.976-.065.848-.698 1.464-1.504 1.464-.826 0-1.474-.65-1.511-1.513-.106-2.567-.489-9.954-.591-11.9h-1.015c-.105 1.944-.502 9.333-.608 11.899-.038.892-.631 1.514-1.444 1.514-.803 0-1.432-.616-1.497-1.465l-.16-1.934c-.107-1.283-.228-2.724-.277-3.462-.016-.233-.194-.311-.272-.311-.125 0-.265.081-.279.309-.05.74-.171 2.182-.278 3.465l-.16 1.934c-.065.848-.702 1.464-1.513 1.464-.827 0-1.453-.637-1.491-1.513l-.398-9.665-.78 1.413c-.323.584-1.088.781-1.573.538-.46-.195-.754-.637-.754-1.138 0-.115.016-.229.047-.339l1.59-5.609c.215-.762.919-1.294 1.711-1.294h17.303c.793 0 1.497.533 1.712 1.294l1.59 5.61c.031.109.047.223.047.338 0 .503-.297.947-.759 1.14l-.037.017c-.566.218-1.238-.028-1.53-.558l-.781-1.412-.398 9.664c-.038.892-.638 1.514-1.459 1.514" />
              </svg>
              <span className="pl-3">Artist Owned & Operated</span>
            </p>
            <p className="mb-4 lg:w-full text-gray-800 text-lg tracking-tight font-normal flex mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 24 24"
              >
                <path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126" />{" "}
              </svg>

              <span className="pl-3">Now in Open Beta!</span>
            </p>

            <div className=" flex inline-flex justify-center">
              <a
                className="ml-2 inline-flex items-center px-8 py-1 mt-4 font-normal bg-gradient-to-br from-amber-300 via-rose-500 to-violet-600 hover:amber-200 hover:via-violet-600 hover:to-sky-900 inline-flex items-center py-3 mt-4 font-normal text-white   active:bg-blue-600 rounded-md text-md md:mt-0"
                href="/market"
              >
                <span className="w-28 flex justify-center">Launch Market</span>
              </a>
              <a
                className="ml-2 inline-flex items-center px-8 py-1 mt-4 font-normal text-white hover:bg-gray-500 rounded-md text-md md:mt-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-400 hover:from-gray-800 hover:via-gray-700 hover:to-gray-500"
                href="/faq"
              >
                <span className="w-28 flex justify-center">Learn More!</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-mx-auto w-full lg:w-1/3 max-h-96 items-center mt-16 lg:-mt-24">
          <img
            className="max-w-xs lg:max-w-lg lg:w-full transform lg:translate-x-20 rotate-3  flex mx-auto"
            alt="Landing"
            src="./landing.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
}
