// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";


import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";

function App() {

  return (
    <>
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent/>*/}

        <ArrowFunctionalComponentWithProps title="Heading 1"/>
        <ArrowFunctionalComponentWithProps
            title="Second Title"
            description="lorem20"
        />
    </>
  )
}

export default App
