<template>
    <div>
        <p>
            <a href="#picture" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined" style="padding: 5px 20px;">打开actionsheet</a>
        </p>
        <div id="picture" class="mui-popover mui-popover-action mui-popover-bottom">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#">拍照或录像</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">选取现有的</a>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#picture"><b>取消</b></a>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
    mui.init({
        swipeBack:true //启用右滑关闭功能
    });
    mui('body').on('shown', '.mui-popover', function(e) {
        //console.log('shown', e.detail.id);//detail为当前popover元素
    });
    mui('body').on('hidden', '.mui-popover', function(e) {
        //console.log('hidden', e.detail.id);//detail为当前popover元素
    });
    var info = document.getElementById("info");
    mui('body').on('tap', '.mui-popover-action li>a', function() {
        var a = this,
            parent;
        //根据点击按钮，反推当前是哪个actionsheet
        for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
            if (parent.classList.contains('mui-popover-action')) {
                break;
            }
        }
        //关闭actionsheet
        mui('#' + parent.id).popover('toggle');
        info.innerHTML = "你刚点击了\"" + a.innerHTML + "\"按钮";
    })
    export default {
        data() {
            return {
                name:'ActionSheet',
            }
        },
    }
</script>

<style scoped>
    p {
        text-indent: 22px;
    }
    span.mui-icon {
        font-size: 14px;
        color: #007aff;
        margin-left: -15px;
        padding-right: 10px;
    }
    #info {
        padding: 20px 10px;
    }
</style>