import "./App.css";
import logo from "./logo.png";
import sanya from "./sanya.jpeg";

function App() {
  return (
    <div className="px-8 py-12 max-w-md mx-auto">
      <img className="h-10" src={logo} alt="" />
      <img className="mt-6 rounded-lg shadow-xl" src={sanya} alt="" />
      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        好好<span className="text-indigo-500">工作</span>，度假就到这里来耍
      </h1>
      <p className="mt-2 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
        impedit quam amet dolor eius eum soluta dicta velit! Incidunt facilis
        architecto dolorem dicta reiciendis fuga odio qui ducimus facere
        expedita?
      </p>

      <div className="mt-4">
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
