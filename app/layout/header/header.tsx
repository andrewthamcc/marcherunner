import { Form, Link } from '@remix-run/react'
import { Button } from '../../ui'

interface HeaderProps {
  isAuthenticated?: boolean
}

export const Header = ({ isAuthenticated = false }: HeaderProps) => {
  return (
    <header className="bg-runnerGreen font-white shadow-lg py-4">
      <div className="flex items-center justify-between container">
        <Link to="/">
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl text-white mr-2 italic">MarchéRunner</h2>
              <svg
                height="512pt"
                viewBox="0 -54 512.00031 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
              >
                <path
                  fill="#fff"
                  d="m512 309.757812c0-.253906-.011719-.507812-.035156-.757812-1.726563-17.148438-9.132813-30.589844-22.019532-39.953125-9.8125-7.128906-22.382812-11.816406-39.5625-14.75-31.289062-5.332031-49.675781-9.34375-58.839843-12.867187l-3.128907-8.15625 1.234376-.296876c5.902343-1.40625 10.90625-5.03125 14.085937-10.199218 3.179687-5.171875 4.152344-11.273438 2.746094-17.175782-1.40625-5.902343-5.03125-10.90625-10.203125-14.085937s-11.273438-4.15625-17.171875-2.746094l-7.121094 1.695313-3.441406-8.96875 4.375-1.042969c5.90625-1.40625 10.90625-5.03125 14.085937-10.203125 3.179688-5.167969 4.15625-11.269531 2.75-17.171875-1.410156-5.902344-5.03125-10.90625-10.203125-14.085937-5.171875-3.179688-11.269531-4.152344-17.175781-2.746094l-13.40625 3.195312c-1.898438-1.925781-3.992188-3.644531-6.246094-5.132812 1.351563-9.035156 6.277344-21.859375 22.382813-30.082032 13.632812-6.976562 19.054687-23.742187 12.082031-37.371093-6.972656-13.636719-23.738281-19.0625-37.371094-12.09375-32.003906 16.359375-44.628906 41.695312-49.585937 60.066406-.835938 3.097656-1.507813 6.261719-2.039063 9.453125l-14.488281-1.433594c-24.605469-2.433594-47.234375-13.546875-63.714844-31.289062-16.308593-17.558594-25.289062-40.144532-25.289062-63.589844 0-3.355469.1875-6.789062.558593-10.203125.738282-6.722656-2.757812-13.015625-8.90625-16.03125-6.171874-3.03125-13.316406-2.027344-18.347656 2.539063l-142.351562 109.75c-.101563.078124-.195313.160156-.289063.246093-18.300781 16.261719-20.554687 43.785157-5.136719 62.652344l30.835938 37.792969c7.515625 9.195312 18.132812 15.152344 29.894531 16.777344 11.558594 1.59375 19.863281 11.546874 18.90625 22.65625-1.328125 15.421874 5.152344 30.320312 17.339844 39.863281l102.53125 80.273437c21.375 17.992188 48.707031 28.894532 76.972656 30.699219.160157.007813.320313.015625.480469.015625h.070312l126.023438-1.121094c1.949219.121094 3.886719.179688 5.816406.179688 34.902344-.003906 66.371094-19.179688 79.714844-48.546875.8125-1.792969 3.109375-8.082031 3.109375-8.082031l6.621094-19.679688c2.265625-5.660156 3.457031-11.738281 3.457031-17.992188zm-129.378906-106.253906c.589844-.136718 1.179687-.207031 1.769531-.207031 1.382813 0 2.746094.378906 3.953125 1.125 1.726562 1.058594 2.933594 2.726563 3.402344 4.695313s.144531 4-.914063 5.722656c-1.0625 1.722656-2.730469 2.929687-4.695312 3.402344l-28.5 6.792968c-.582031.140625-1.179688.210938-1.769531.210938-3.511719 0-6.539063-2.394532-7.355469-5.820313-.46875-1.96875-.144531-4 .917969-5.726562 1.058593-1.722657 2.726562-2.929688 4.695312-3.398438zm-25.5-9.492187-6.511719 1.550781c-5.902344 1.410156-10.90625 5.03125-14.085937 10.203125-3.179688 5.171875-4.152344 11.269531-2.746094 17.171875 2.449218 10.28125 11.535156 17.460938 22.089844 17.460938 1.773437 0 3.550781-.210938 5.285156-.625l12.394531-2.957032 4.683594 12.199219c.394531 1.039063 1.015625 1.972656 1.816406 2.742187l1.363281 1.3125c.640625.621094 1.390625 1.121094 2.207032 1.480469 6.566406 2.886719 17.746093 6.4375 53.050781 12.734375-12.09375 15.363282-32.097657 23.050782-51.804688 19.050782l-26.492187-5.375c-9.160156-1.859376-16.621094-8.546876-19.464844-17.449219l-39.242188-122.871094 23.503907 2.324219c2.246093.222656 4.417969.75 6.472656 1.535156-4.046875 1.855469-7.457031 4.863281-9.84375 8.742188-3.179687 5.171874-4.15625 11.269531-2.75 17.175781 2.453125 10.277343 11.539063 17.457031 22.09375 17.457031 1.773437 0 3.550781-.210938 5.28125-.625l9.257813-2.207031zm-207.640625 28.546875c18.847656-18.246094 29.121093-42.253906 30.554687-71.488282.003906-.015624.003906-.03125.003906-.046874l114.886719 24.578124 12.855469 40.257813-115.804688 47.886719zm216.410156-71.574219c.589844-.140625 1.183594-.210937 1.773437-.210937 1.382813 0 2.746094.378906 3.953126 1.125 1.722656 1.058593 2.929687 2.726562 3.398437 4.695312s.144531 4-.914063 5.726562c-1.0625 1.722657-2.726562 2.929688-4.695312 3.398438l-28.496094 6.796875c-.585937.136719-1.179687.207031-1.769531.207031-3.515625 0-6.539063-2.390625-7.355469-5.820312-.46875-1.96875-.144531-4 .914063-5.722656 1.0625-1.726563 2.726562-2.933594 4.695312-3.402344zm-61.03125-32.207031c4.15625-15.414063 14.792969-36.691406 41.855469-50.523438 6.191406-3.164062 13.816406-.699218 16.984375 5.503906 3.171875 6.191407.707031 13.8125-5.488281 16.980469-20.042969 10.238281-27.246094 26.242188-29.769532 37.71875-1.246094-.246093-2.507812-.441406-3.78125-.566406l-21.367187-2.113281c.425781-2.363282.945312-4.703125 1.566406-7zm-137.402344-102.65625c.242188-.179688.472657-.378906.691407-.589844.539062-.519531 1.128906-.394531 1.53125-.199219.578124.285157.546874.570313.523437.789063-.429687 3.960937-.648437 7.949218-.648437 11.847656 0 27.285156 10.417968 53.53125 29.339843 73.898438 18.996094 20.457031 45.039063 33.261718 73.324219 36.058593l11.023438 1.089844 6.375 19.957031-109.640626-23.457031c-1.007812-19.269531-5.453124-40.21875-13.304687-62.515625-1.390625-3.945312-5.71875-6.015625-9.660156-4.628906-3.949219 1.390625-6.019531 5.71875-4.628907 9.660156 25.78125 73.214844 8.027344 112.925781-13.796874 133.964844l-73.261719-71.011719c-6.253907-6.054687-9.882813-14.058594-10.214844-22.539063-.390625-9.847656 4.09375-19.558593 12.074219-26.375l68.742187-52.089843c1.488281 2.871093 3.292969 6.480469 5.261719 10.703125 1.285156 2.753906 4.019531 4.371094 6.871094 4.371094 1.074218 0 2.164062-.226563 3.199218-.710938 3.789063-1.769531 5.429688-6.277344 3.660157-10.066406-2.640625-5.65625-4.984375-10.246094-6.746094-13.5625zm246.507813 372.621094c-.183594-.011719-.367188-.019532-.550782-.015626l-126.011718 1.121094c-25.003906-1.65625-49.148438-11.320312-68.011719-27.234375-.070313-.058593-.140625-.117187-.214844-.171875l-102.636719-80.359375c-8.140624-6.375-12.472656-16.328125-11.582031-26.632812 1.652344-19.148438-12.375-36.265625-31.929687-38.964844-7.960938-1.097656-15.148438-5.132813-20.230469-11.351563l-30.835937-37.792968c-10.226563-12.515625-8.753907-30.761719 3.332031-41.628906l14.785156-11.871094c-.128906 1.722656-.175781 3.460937-.109375 5.203125.488281 12.390625 5.75 24.046875 14.8125 32.824219l78.296875 75.890624c.023437.019532.042969.042969.0625.0625l84.324219 81.730469c33.128906 32.105469 77.183594 49.785157 124.054687 49.785157h75.898438c4.183593 0 7.574219-3.390626 7.574219-7.574219 0-4.183594-3.390626-7.574219-7.574219-7.574219h-75.898438c-42.292969 0-83.664062-16.589844-113.511719-45.511719l-24.175781-23.4375 108.574219-44.898437 12.070312 37.78125c4.511719 14.128906 16.34375 24.738281 30.878907 27.6875l26.496093 5.375c4.480469.910156 8.972657 1.351562 13.417969 1.351562 23.335938 0 45.398438-12.140625 57.78125-32.316406 28.242188 5.871094 41.457031 18 43.796875 39.910156-.097656 9.007813-3.789062 17.476563-10.417968 23.882813-6.796876 6.5625-15.847657 10.175781-25.484376 10.175781h-13.53125c-4.183593 0-7.574218 3.390625-7.574218 7.574219 0 4.183593 3.390625 7.574219 7.574218 7.574219h13.53125c7.414063 0 14.582032-1.535157 21.136719-4.433594-12.96875 22.105468-39.46875 35.671875-68.117187 33.839844zm0 0"
                />
                <path
                  fill="#fff"
                  d="m136.285156 363.777344h-94.765625c-4.183593 0-7.574219 3.390625-7.574219 7.574218 0 4.183594 3.390626 7.574219 7.574219 7.574219h94.765625c4.183594 0 7.574219-3.390625 7.574219-7.574219 0-4.183593-3.394531-7.574218-7.574219-7.574218zm0 0"
                />
                <path
                  fill="#fff"
                  d="m67.519531 298.964844c0-4.183594-3.390625-7.578125-7.574219-7.578125h-50.402343c-4.1875 0-7.578125 3.394531-7.578125 7.578125 0 4.179687 3.390625 7.574218 7.578125 7.574218h50.402343c4.183594 0 7.574219-3.394531 7.574219-7.574218zm0 0"
                />
              </svg>
            </div>
          </div>
        </Link>
        <Form
          action={isAuthenticated ? '/auth/logout' : '/auth/auth0'}
          method="post"
        >
          <Button
            border
            color="orange"
            label={isAuthenticated ? 'Logout' : 'Sign in'}
            type="submit"
          />
        </Form>
      </div>
    </header>
  )
}
