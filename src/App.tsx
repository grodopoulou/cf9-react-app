// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";


// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import Layout from "./components/Layout.tsx";
// import PreviousValue from "./components/LessonSix/PreviousValue.tsx";
// import {useEffect} from "react";
// import FocusInput from "./components/LessonSix/FocusInput.tsx";
// import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
// import AutoRedirectAdvanced from "./components/LessonSix/AutoRedirectAdvanced.tsx";
// import WindowSize from "./components/LessonSix/WindowSize.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import NameChangerWithTitle from "./components/LessonFive/NameChangerWithTitle.tsx";
// import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
// import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import Counter from "./components/LessonFour/Counter.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";


// function setup() {
//     alert("count")
// }
// useEffect(setup, [count])


import {Route, Routes} from "react-router";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
import HomePage from "./pages/HomePage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import MultiFieldForm from "./components/LessonNine/MultiFieldForm.tsx";

function App() {

    // useEffect(() => {
    //     history.pushState({}, "", "/about");
    // })

  return (
    <>
        {/*Lesson 1*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent/>*/}

        {/*Lesson 2*/}
        {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
        {/*<ArrowFunctionalComponentWithProps*/}
        {/*    title="Second Title"*/}
        {/*    description="lorem20"*/}
        {/*/>*/}

        {/*Lesson 3*/}
        {/*<Layout addClasses="bg-gray-50">*/}
        {/*    <ArrowFunctionalComponentWithProps*/}
        {/*        title="Second Title"*/}
        {/*        description ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."*/}
        {/*    />*/}
        {/*    <p className="text-red-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>*/}
        {/*</Layout>*/}

        {/*Lesson 4*/}
        {/*<Layout addClasses="bg-gray-50">*/}
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
        {/*    <CounterAdvanced/>*/}
        {/*</Layout>*/}

        {/*Lesson 5*/}
        {/*<Layout addClasses="bg-gray-50">*/}
        {/*    <NameChanger/>*/}
        {/*    <CounterWithCustomHook/>*/}
        {/*    <NameChangerWithTitle/>*/}
        {/*</Layout>*/}

        {/*Lesson 6*/}
        {/*<Layout addClasses="bg-gray-50">*/}
        {/*    <AutoRedirect/>*/}
        {/*    <AutoRedirectAdvanced/>*/}
        {/*    <WindowSize/>*/}
        {/*    <FocusInput/>*/}
        {/*    <PreviousValue/>*/}
        {/*</Layout>*/}

        {/*Lesson 7*/}
        {/*<Routes>*/}
        {/*    <Route index element={<HomePage />} />*/}
        {/*    /!*<Route path="/" element={<HomePage />}>*!/*/}
        {/*        <Route path="name-changer" element={<NameChanger />} />*/}
        {/*        <Route path="counter" element={<Counter />} />*/}
        {/*        <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
        {/*</Routes>*/}


        {/* /examples/name-changer */}
        {/* /examples/counter */}
        {/* /examples/counter-advanced */}
        <Routes>
            <Route element={<RouterLayout />} >
                <Route index element={<HomePage />} />
                {/* <Route path="examples?"> */}
            {/*    <Route path="examples">*/}
            {/*        <Route index element={<NameChanger />} />*/}
            {/*        <Route path="name-changer" element={<NameChanger />} />*/}
            {/*        <Route path="counter" element={<Counter />} />*/}
            {/*        <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
            {/*    </Route>*/}
            {/*</Route>*/}



            {/* /users */}
            {/* /users/userID */}
            <Route path="users">
            {/*    <Route index element={<UserListPage />} />*/}
                <Route path=":userId" element={<UserPage />} />
                {/* /users/15   Path Param */}
                {/* /users?id=15    Query Params */}
                {/* /users?page=2&sort=asc     Query Params */}
            </Route>

                <Route path="search" element={<SearchPage />} />
                {/* /search?query=React&page=2      Query Params */}

                <Route path="multifield-form" element={<MultiFieldForm/>}/>

            </Route>

            {/* /files/* */}
            {/*<Route path="files/*" element={<File />} />*/}

            {/*let params = useParams();*/}
            {/*let filepath = params["*"]*/}

            {/*<Route path="*" element={<NotFoundPage />} />*/}

        </Routes>
    </>
  )
}

export default App
