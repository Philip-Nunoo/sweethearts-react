import React from 'react';
import AutoForm from 'uniforms-unstyled/AutoForm';
import AutoField   from 'uniforms-unstyled/AutoField';
import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
    hairColor: {
        type: String,
    }
});

const Home = () => (
    <div>
        <h4>Start page</h4>
        
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input"/>
            </div>
        </div>
        <AutoForm schema={schema} onSubmit={doc => console.log(doc)}>
            <AutoField name="hairColor" />
        </AutoForm>
    </div>
);

export default Home;
