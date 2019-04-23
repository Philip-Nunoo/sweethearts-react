import React from 'react';
import AutoForm from 'uniforms-bulma/AutoForm';
import ErrorsField from 'uniforms-bulma/ErrorsField';
import AutoField from 'uniforms-bulma/AutoField';
import SubmitField from 'uniforms-bulma/SubmitField';
import schema from './schema';

const Home = (props) => (
    <div className="columns is-mobile is-centered">
        <div className="column is-three-fifths">
            <h4>Start page</h4>
            <AutoForm schema={schema} onSubmit={doc => console.log(doc)}>
                <ErrorsField />
                <AutoField name="age" min={14}/>
                <AutoField name="height" />
                <AutoField name="hairColor" />
                <AutoField name="hairLength" />
                <AutoField name="eyeColor" />
                <AutoField name="beardType" />
                <AutoField name="bodyType" />
                <SubmitField value="Calculate"/>
            </AutoForm>
        </div>
    </div>
);

export default Home;
