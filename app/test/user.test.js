const { graphql } = require("graphql");
const { schema } = require("../app");
const actions = require("../actions");
const setupTest = require("./helpers");

const mutationRegister = `
    mutation Register($data:UserCreateInput!){
        signup(data:$data){
            token
        }
    }
`;

describe("Signup user works correctly", () => {
    beforeEach(async () => await setupTest());

    test("Should creater user correctly", async () =>{
        const data = {
            name:"prueba2",
            email:"prueba2@mail.com",
            password:"prueba2",
            birth_date:"11/10/1993"
        };

        const res = await graphql(schema, mutationRegister, null, {}, {data});

        expect(res.data.signup).toHaveProperty("token");
    });

    test("Should not creater user", async () => {
        const data = {
            name:"prueba2",
            email:"prueba2@mail.com",
            password:"prueba2",
            birth_date:"11/10/1993"
        };

        await actions.createUser(data);

        const res = await graphql(schema, mutationRegister, null, {}, {data});

        expect(res).toHaveProperty("errors");
    })
})