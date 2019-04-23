import React from 'react';
import AutoForm from 'uniforms-bulma/AutoForm';
import ErrorsField from 'uniforms-bulma/ErrorsField';
import AutoField from 'uniforms-bulma/AutoField';
import SubmitField from 'uniforms-bulma/SubmitField';
import schema from './schema';
import Container from '../../components/Container/Container';

const Home = (props) => (
    <Container>
        <h4>Start page</h4>
        <AutoForm
            schema={schema}
            onSubmit={doc => {
                console.log(props.history.push({
                    pathname: '/results',
                    state: { detail: doc }
                }));
            }}
        >
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
    </Container>
);

export default Home;
