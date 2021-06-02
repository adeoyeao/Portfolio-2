module.exports = {
  apps : [
      {
        name: "app",
        script: "npm",
	      args: "start",
        instances : "max",
        exec_mode : "cluster",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 4000,
        }
      }
  ]
}
