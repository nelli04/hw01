import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        /*<HashRouter>*/
            <div>
                {/*Routes выбирает первый подходящий роут*/}
                <Routes>
                    {/*роутинг будут писать студенты*/}
                    {/*<Route path='/pre-junior' element={<PreJunior/>}/>*/}
                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                    {/*<Route ...*/}

                    {/*роуты для /pre-junior, /junior, /junior-plus*/}
                    <Route path='/pre-junior' element={<PreJunior/>}> </Route>


                    {/*<Route ...*/}
                    <Route path='/junior' element={<Junior/>}/>
                    {/*<Route ...*/}
                    <Route path='/junior-plus' element={<JuniorPlus/>}/>
                    {/*<Route ...*/}

                    {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                    <Route path='/*' element={<Error404/>}/>
                    {/*<Route ...*/}
                </Routes>
            </div>
        /*</HashRouter>*/
    )
}

export default Pages
