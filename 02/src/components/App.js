import React from 'react';

import ImportComponent from './ImportComponent';
import TodosComponent from './TodosComponent';


export default function App(props) {
    console.log('propsApp', props);

    return (
        <div>        
            <ImportComponent />
             <TodosComponent />
        </div>
    )

};