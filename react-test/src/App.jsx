import Code from "./Code.jsx"

const code1Text = `function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car color="red"/>
);`;

function App() {
  return (
    <div id="app-container" className="dark:bg-slate-900 dark:text-white min-h-screen px-[2rem]">
      <h1 className="text-center text-5xl font-bold p-[1rem] py-[4rem]">Hello World!</h1>
      
      <h3 className="">"Man if only I had a very cool code example" - ༼ つ ◕_◕ ༽つ</h3>

      <Code code={code1Text} title="Very Cool Code Example!" description="It does something cool (probably)" />

      <h3 className="">"...Holy Cow" - ༼ つ ◕_◕ ༽つ</h3>

      <h2 className="text-3xl font-extrabold text-center mt-[4rem]">Pi</h2>
      <Code title="Literally Just Pi" code="3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233" />

    </div>
  )
}

export default App
