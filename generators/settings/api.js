module.exports = {
  description: "Creates a new network service",
  prompts: [
    {
      type: "input",
      name: "collection_name",
      message: "What is the name of the collection service?",
    },
  ],
  actions: [
    {
      type: "add",
      path: "../src/entry-points/http/{{lowerCase collection_name}}/{{dashCase collection_name}}.ts",
      templateFile: "templates/entrypoint.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/data-access/models/{{lowerCase collection_name}}.model.ts",
      templateFile: "templates/data-access/model.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/data-access/{{dashCase collection_name}}.repo.ts",
      templateFile: "templates/data-access/repo.hbs",
      skipIfExists: true,
    },
    // GET
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/get-{{collection_name}}/get-{{collection_name}}.schema.ts",
      templateFile: "templates/domain/use-cases/get.schema.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/get-{{collection_name}}/get-{{collection_name}}.usecase.ts",
      templateFile: "templates/domain/use-cases/get.usecase.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/get-{{collection_name}}/index.ts",
      templateFile: "templates/domain/use-cases/index.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/{{lowerCase collection_name}}.schema.ts",
      templateFile: "templates/domain/schema.hbs",
      skipIfExists: true,
    },
    //CREATE
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/create-{{collection_name}}/create-{{collection_name}}.schema.ts",
      templateFile: "templates/domain/use-cases/create.schema.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/create-{{collection_name}}/create-{{collection_name}}.usecase.ts",
      templateFile: "templates/domain/use-cases/create.usecase.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/create-{{collection_name}}/index.ts",
      templateFile: "templates/domain/use-cases/create.index.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/{{lowerCase collection_name}}.schema.ts",
      templateFile: "templates/domain/schema.hbs",
      skipIfExists: true,
    },
    //UPDATE
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/update-{{collection_name}}/update-{{collection_name}}.schema.ts",
      templateFile: "templates/domain/use-cases/update.schema.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/update-{{collection_name}}/update-{{collection_name}}.index.ts",
      templateFile: "templates/domain/use-cases/update.index.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/update-{{collection_name}}/update-{{collection_name}}.usecase.ts",
      templateFile: "templates/domain/use-cases/update.usecase.hbs",
      skipIfExists: true,
    },
    //DELETE
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/delete-{{collection_name}}/delete-{{collection_name}}.schema.ts",
      templateFile: "templates/domain/use-cases/delete.schema.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/delete-{{collection_name}}/delete-{{collection_name}}.index.ts",
      templateFile: "templates/domain/use-cases/delete.index.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/delete-{{collection_name}}/delete-{{collection_name}}.usecase.ts",
      templateFile: "templates/domain/use-cases/delete.usecase.hbs",
      skipIfExists: true,
    },
    //GET-ONE
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/getone-{{collection_name}}/getone-{{collection_name}}.schema.ts",
      templateFile: "templates/domain/use-cases/getone.schema.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/getone-{{collection_name}}/getone-{{collection_name}}.index.ts",
      templateFile: "templates/domain/use-cases/getone.index.hbs",
      skipIfExists: true,
    },
    {
      type: "add",
      path: "../src/domain/{{dashCase collection_name}}/use-cases/getone-{{collection_name}}/getone-{{collection_name}}.usecase.ts",
      templateFile: "templates/domain/use-cases/getone.usecase.hbs",
      skipIfExists: true,
    },
  ],
};
