from flask import Flask, render_template

app = Flask(__name__)


# Todo:111
@app.route('/')
def vuyemm():
    title = "点击开启你的学期历程"
    return render_template('主页面.html', title=title)


@app.route('/三月')
def sjyt():
    return render_template('三月.html')


@app.route('/上课')
def uhke():
    return render_template('上课.html')


@app.route('/不上课')
def buuhke():
    return render_template('不上课.html')


@app.route('/作业')
def zoye():
    return render_template('作业.html')


@app.route('/认真做作业')
def rfvfzozoye():
    return render_template('认真做作业.html')


@app.route('/随便做做')
def svbmzozo():
    return render_template('随便做做.html')


@app.route('/不做作业')
def buzozoye():
    return render_template('不做作业.html')


@app.route('/3月娱乐')
def sjytyule():
    return render_template('3月娱乐.html')


@app.route('/玩手机')
def wjuzji():
    return render_template('玩手机.html')


@app.route('/读书')
def duuu():
    return render_template('读书.html')


@app.route('/复习')
def fuxi():
    return render_template('复习.html')


@app.route('/出去')
def iuqu():
    return render_template('出去.html')


@app.route('/锻炼')
def drlm():
    return render_template('锻炼.html')


@app.route('/追剧')
def vvju():
    return render_template('追剧.html')


@app.route('/3月娱乐1')
def sjytyule1():
    return render_template('3月娱乐1.html')


@app.route('/玩手机1')
def wjuzji1():
    return render_template('玩手机1.html') \
 \
        @ app.route('/出去1')


def iuqu1():
    return render_template('出去1.html')


@app.route('/读书1')
def duuu1():
    return render_template('读书1.html')


@app.route('/复习1')
def fuxi1():
    return render_template('复习1.html')


@app.route('/锻炼1')
def drlm1():
    return render_template('锻炼1.html')


@app.route('/追剧1')
def vvju1():
    return render_template('追剧1.html')


@app.route('/3月娱乐2')
def sjytyule2():
    return render_template('3月娱乐2.html')


@app.route('/玩手机2')
def wjuzji2():
    return render_template('玩手机2.html')


@app.route('/读书2')
def duuu2():
    return render_template('读书2.html')


@app.route('/复习2')
def fuxi2():
    return render_template('复习2.html')


@app.route('/出去2')
def iuqu2():
    return render_template('出去2.html')


@app.route('/锻炼2')
def drlm2():
    return render_template('锻炼2.html')


@app.route('/追剧2')
def vvju2():
    return render_template('追剧2.html')


@app.route('/3月睡眠')
def sjytuvmm():
    return render_template('3月睡眠.html')


@app.route('/直接睡觉')
def vijpuvjn():
    return render_template('直接睡觉.html')


@app.route('/再写作业')
def zdxpzoye():
    return render_template('再写作业.html')


@app.route('/熬夜追剧')
def aoyevvju():
    return render_template('熬夜追剧.html')


@app.route('/三月支线')
def sjytvixm():
    return render_template('三月支线.html')


@app.route('/不去早八')
def buquzcba():
    return render_template('不去早八.html')


@app.route('/赶去上课')
def gjquuhke():
    return render_template('赶去上课.html')


@app.route('/四月转场')
def siytvrih():
    return render_template('四月转场.html')


@app.route('/四月')
def siyt():
    return render_template('四月.html')


@app.route('/吃瓜')
def iigx():
    return render_template('吃瓜.html')


@app.route('/奋斗')
def ffdz():
    return render_template('奋斗.html')


@app.route('/喜欢的人聊天')
def xihrderflntm():
    return render_template('喜欢的人聊天.html')


@app.route('/晚点再聊')
def wjdmzdln():
    return render_template('晚点再聊.html')


@app.route('/一起学习')
def yiqixtxi():
    return render_template('一起学习.html')


@app.route('/出去聊')
def iuquln():
    return render_template('出去聊.html')


@app.route('/...')
def later():
    return render_template('....html')


@app.route('/抽人')
def izrf():
    return render_template('抽人.html')


@app.route('/点名提问')
def dmmktiwf():
    return render_template('点名提问.html')


@app.route('/回答问题')
def hvdawfti():
    return render_template('回答问题.html')


@app.route('/回答问题2')
def hvdawfti2():
    return render_template('回答问题2.html')


@app.route('/认真讨论')
def rfvftcly():
    return render_template('认真讨论.html')


@app.route('/回去睡觉')
def hvquuvjn():
    return render_template('回去睡觉.html')


@app.route('/说不会')
def uobuhv():
    return render_template('说不会.html')


@app.route('/回答问题3')
def hvdawfti3():
    return render_template('回答问题3.html')


@app.route('/算了摆烂')
def srlebdlj():
    return render_template('算了摆烂.html')


@app.route('/下定决心')
def xxdkjtxb():
    return render_template('下定决心.html')


@app.route('/4月活动')
def siythods():
    return render_template('4月活动.html')


@app.route('/以后再说')
def yihzzduo():
    return render_template('以后再说.html')


@app.route('/不能错过')
def bungcogo():
    return render_template('不能错过.html')


@app.route('/国潮奇妙夜')
def goicqimnye():
    return render_template('国潮奇妙夜.html')


@app.route('/参加一下')
def cjjxyixx():
    return render_template('参加一下.html')


@app.route('/算了')
def srle():
    return render_template('算了.html')


@app.route('/摊主')
def tjvu():
    return render_template('摊主.html')


@app.route('/火速申请')
def hosuufqk():
    return render_template('火速申请.html')


@app.route('/当逛街的')
def dhgljpde():
    return render_template('当逛街的.html')


@app.route('/4月其它')
def siytqita():
    return render_template('4月其它.html')


@app.route('/4月其它2')
def siytqita2():
    return render_template('4月其它2.html')


@app.route('/5月转场')
def wuytvrih():
    return render_template('5月转场.html')


@app.route('/5月')
def wuyt():
    return render_template('5月.html')


@app.route('/5月2')
def wuyt2():
    return render_template('5月2.html')


@app.route('/5月娱乐')
def wuytyule():
    return render_template('5月娱乐.html')


@app.route('/参与项目')
def cjyuxlmu():
    return render_template('参与项目.html')


@app.route('/运动会比赛')
def yydshvbisd():
    return render_template('运动会比赛.html')


@app.route('/当观众')
def dhgrvs():
    return render_template('当观众.html')


@app.route('/不去运动会')
def buquyydshv():
    return render_template('不去运动会.html')


@app.route('/合唱团')
def heihtr():
    return render_template('合唱团.html')


@app.route('/参与合唱')
def cjyuheih():
    return render_template('参与合唱.html')


@app.route('/合唱比赛')
def heihbisd():
    return render_template('合唱比赛.html')


@app.route('/多休息')
def doxqxi():
    return render_template('多休息.html')


@app.route('/广院之春')
def glyrviiy():
    return render_template('广院之春.html')


@app.route('/速速转发')
def susuvrfa():
    return render_template('速速转发.html')


@app.route('/多休息会吧')
def doxqxihvba():
    return render_template('多休息会吧.html')


@app.route('/5月睡眠')
def wuytuvmm():
    return render_template('5月睡眠.html')


@app.route('/5月睡眠2')
def wuytuvmm2():
    return render_template('5月睡眠2.html')


@app.route('/6月转场')
def lqytvrih():
    return render_template('6月转场.html')


@app.route('/6月')
def lqyt():
    return render_template('6月.html')


@app.route('/下课去讨论')
def xxkequtcly():
    return render_template('下课去讨论.html')


@app.route('/下课回宿舍')
def xxkehvsuue():
    return render_template('下课回宿舍.html')


@app.route('/出去玩')
def iuquwj():
    return render_template('出去玩.html')


@app.route('/再约')
def zdyt():
    return render_template('再约.html')


@app.route('/玩完再复习')
def wjwjzdfuxi():
    return render_template('玩完再复习.html')


@app.route('/期末成绩1')
def qimoigji1():
    return render_template('期末成绩1.html')


@app.route('/期末成绩2')
def qimoigji2():
    return render_template('期末成绩2.html')


@app.route('/身体健康状况')
def uftijmkhvlkl():
    return render_template('身体健康状况.html')


@app.route('/心理')
def xbli():
    return render_template('心理.html')


@app.route('/魅力')
def mwli():
    return render_template('魅力.html')


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
