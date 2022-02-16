import "./App.css";
import logo from "./logo.png";
import sanya from "./sanya.jpeg";

function App() {
  return (
    <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl">
      <img className="h-10" src={logo} alt="" />
      <img
        className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center"
        src={sanya}
        alt=""
      />
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl">
        好好<span className="text-indigo-500">工作</span>，度假就到这里来耍
      </h1>
      <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
        impedit quam amet dolor eius eum soluta dicta velit! Incidunt facilis
        architecto dolorem dicta reiciendis fuga odio qui ducimus facere
        expedita?
      </p>

      <div className="mt-4 sm:mt-6">
        <a
          className="inline-block rounded-lg shadow-xl bg-indigo-500 text-white px-5 py-3 tracking-wider font-semibold text-sm"
          href="/#"
        >
          请年假
        </a>
      </div>
    </div>
  );
}

export default App;
