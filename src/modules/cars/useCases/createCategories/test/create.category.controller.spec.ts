import { hash } from 'bcrypt';
import { randomUUID } from 'crypto';
import { response } from 'express';
import request from 'supertest';
import * as sinon from 'sinon';
import { assert } from 'chai';
import { Connection } from 'typeorm';
import { app } from '../../../../../app';
import createConnection from '../../../../../database';

let connection: Connection;

describe('Create category controller', () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();

    const id = randomUUID();
    const password = await hash('admin', 8);

    await connection.query(`INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
    values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'XXX-XXXX')  
    `);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create a new category ', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@admin.com.br',
      password: 'admin',
    });

    const { token } = responseToken.body;

    await request(app)
      .post('/categories')
      .send({
        name: 'batata',
        description: 'batata nova',
      })
      .set({
        Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        assert.equal(response.status, 201);
      });
  });

  it('Should not be able to create a new category with name exists  ', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@admin.com.br',
      password: 'admin',
    });

    const { token } = responseToken.body;

    await request(app)
      .post('/categories')
      .send({
        name: 'batata',
        description: 'batata nova',
      })
      .set({
        Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        assert.equal(response.status, 400);
      });
  });
});
