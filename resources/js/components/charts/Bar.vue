<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData);
  },
};
</script>

<style></style>
