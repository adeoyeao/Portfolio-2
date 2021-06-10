module.exports = {
  apps : [
      {
        name: "aa-web-design",
        script: "npm",
	      args: "start",
        watch: true,
        instances : "max",
        exec_mode : "cluster",
        env: {
          PORT: 3000,
          NODE_ENV: "development",
        },
        env_production: {
          PORT: 8000,
          NODE_ENV: "production",
        }
      }
  ]
}
