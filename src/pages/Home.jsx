import React from 'react';
import SimpleSchema from 'simpl-schema';
import AutoForm from 'uniforms-bulma/AutoForm';
import ErrorsField from 'uniforms-bulma/ErrorsField';
import AutoField from 'uniforms-bulma/AutoField';
import SubmitField from 'uniforms-bulma/SubmitField';

const schema = new SimpleSchema({
    age: {
        type: Number,
        min: 14,
        max: 70,
        defaultValue: 22,
        uniforms: {
        },
    },
    height: {
        type: Number,
        defaultValue: 176,
    },
    hairColor: {
        type: String,
        allowedValues: ['blonde', 'brown', 'black', 'red', 'grey'],
        defaultValue: 'blonde',
        uniforms: {
            options: [
                { value: 'blonde', label: 'Blonde' },
                { value: 'brown', label: 'Brown' },
                { value: 'black', label: 'Black' },
                { value: 'red', label: 'Red' },
                { value: 'grey', label: 'Grey' },
            ],
        },
    },
    hairLength: {
        type: String,
        allowedValues: ['long', 'middle', 'short', 'bald'],
        defaultValue: 'long',
        uniforms: {
            options: [
                { value: 'long', label: 'Long' },
                { value: 'middle', label: 'Middle' },
                { value: 'short', label: 'Short' },
                { value: 'bald', label: 'Bald' },
            ],
        },
    },
    eyeColor: {
        type: String,
        allowedValues: ['blue', 'green', 'brown', 'grey'], // radio
        defaultValue: 'blue',
        uniforms: {
            options: [
                { value: 'blue', label: 'Blue' },
                { value: 'green', label: 'Green' },
                { value: 'brown', label: 'Brown' },
                { value: 'grey', label: 'Grey' },
            ],
        },
    },
    beardType: {
        type: String,
        allowedValues: ['1', '2', '3', '4'],
        label: 'Beard',
        defaultValue: '1',
        uniforms: {
            options: [
                { value: '1', label: 'Type 1' },
                { value: '2', label: 'Type 2' },
                { value: '3', label: 'Type 3' },
                { value: '4', label: 'Type 4' },
            ],
        },
    },
    bodyType: {
        type: String,
        allowedValues: ['1', '2', '3'],
        defaultValue: '1',
        label: 'Body',
        uniforms: {
            options: [
                { value: '1', label: 'Type 1' },
                { value: '2', label: 'Type 2' },
                { value: '3', label: 'Type 3' },
            ],
        },
    },
});

const Home = () => (
    <div>
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
);

export default Home;
