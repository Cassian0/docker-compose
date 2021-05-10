module.exports = {
  dialect: 'postgres',
  host: 'postgres',
  username: 'postgres',
  password: 'docker',
  database: 'trail_app',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
