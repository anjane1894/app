// 初始化 particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1 } },
        line_linked: { enable: false },
        move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

document.getElementById('fortuneBtn').addEventListener('click', function() {
    const fortunes = [
        { result: "你的未来充满无限可能", interpretation: "这预示着你将迎来一个充满机会的时期，勇敢尝试新事物吧。" },
        { result: "小心身边的小人", interpretation: "有人可能在暗中嫉妒你，保持警惕，避免泄露重要计划。" },
        { result: "财富之门即将开启", interpretation: "努力即将获得回报，可能是一笔意外之财或事业上的突破。" },
        { result: "爱情的火花即将来临", interpretation: "一段浪漫的邂逅即将来临，敞开心扉迎接它吧。" },
        { result: "今天的努力，明天开花", interpretation: "坚持不懈的付出将带来意想不到的成就，耐心等待。" },
        { result: "命运在暗中考验你", interpretation: "当前的困难是成长的试炼，跨越它你将更强大。" },
        { result: "意外的旅行改变视角", interpretation: "一次旅程将让你重新审视生活，带来新的启发。" },
        { result: "过去的阴影即将散去", interpretation: "放下旧日的包袱，你将迎来轻松与自由的新篇章。" },
        { result: "智慧将指引你的道路", interpretation: "冷静思考将帮助你解决难题，信任自己的直觉。" },
        { result: "风暴之后是晴天", interpretation: "眼前的混乱只是暂时的，光明很快就会到来。" },
        { result: "朋友将成为你的支柱", interpretation: "在关键时刻，朋友的支持将让你度过难关。" },
        { result: "机遇藏于变化之中", interpretation: "适应变化，你将在其中发现意想不到的收获。" },
        { result: "健康需多加关注", interpretation: "最近的身体信号提醒你休息与调整生活方式。" },
        { result: "灵感如泉水涌现", interpretation: "创意将是你成功的钥匙，抓住灵感付诸行动吧。" },
        { result: "坚持带来意想不到的果实", interpretation: "看似无望的努力即将开花，胜利就在眼前。" },
        { result: "神秘之人将带来转机", interpretation: "一个陌生人可能改变你的轨迹，留意身边的人。" },
        { result: "时间将揭示真相", interpretation: "耐心等待，隐藏的事实很快会浮出水面。" },
        { result: "勇气让你脱颖而出", interpretation: "大胆行动将让你在人群中闪耀，机会属于勇敢者。" },
        { result: "平静中孕育新生", interpretation: "在宁静中反思，你将找到新的方向与目标。" },
        { result: "星光为你指引方向", interpretation: "迷茫时抬头看天，命运会为你点亮前路。" }
    ];

    const result = document.getElementById('result');
    const interpretation = document.getElementById('interpretation');
    const ball = document.querySelector('.crystal-ball');

    // 初始化状态
    ball.classList.add('active'); // 触发颜色和抖动动画
    result.style.opacity = '0';
    result.classList.remove('show');
    interpretation.style.opacity = '0';
    interpretation.classList.remove('show');

    setTimeout(() => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        result.textContent = randomFortune.result;
        result.classList.add('show');

        // 逐字显示解释
        interpretation.textContent = '';
        let index = 0;
        const text = randomFortune.interpretation;

        function typeWriter() {
            if (index < text.length) {
                interpretation.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            } else {
                interpretation.classList.add('show');
            }
        }

        setTimeout(() => {
            interpretation.classList.add('show');
            typeWriter();
        }, 300);

        ball.classList.remove('active'); // 动画结束后移除类
    }, 800);
});