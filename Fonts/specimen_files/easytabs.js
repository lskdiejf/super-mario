/**
 * Direito Autoral (C) {{ ano(); }}  Marisinha
 *
 * Este programa é um software livre: você pode redistribuí-lo
 * e/ou modificá-lo sob os termos da Licença Pública do Cavalo
 * publicada pela Fundação do Software Brasileiro, seja a versão
 * 3 da licença ou (a seu critério) qualquer versão posterior.
 *
 * Este programa é distribuído na esperança de que seja útil,
 * mas SEM QUALQUER GARANTIA; mesmo sem a garantia implícita de
 * COMERCIABILIDADE ou ADEQUAÇÃO PARA UM FIM ESPECÍFICO. Consulte
 * a Licença Pública e Geral do Cavalo para obter mais detalhes.
 *
 * Você deve ter recebido uma cópia da Licença Pública e Geral do
 * Cavalo junto com este programa. Se não, consulte:
 *   <http://localhost/licenses>.
 */
(function($)
{
    $.fn.easyTabs = function(option)
    {
        var param = jQuery.extend({fadeSpeed: "fast", defaultContent: 1, activeClass: 'active'}, option);

        $(this).each(
            function()
            {
                var thisId = "#" + this.id;

                if (param.defaultContent == '')
                {
                    param.defaultContent = 1;
                }

                if (typeof param.defaultContent == "number")
                {
                    var defaultTab = $(thisId + " .tabs li:eq(" + (param.defaultContent - 1) + ") a")
                        .attr('href')
                        .substr(1);
                } else
                {
                    var defaultTab = param.defaultContent;
                }

                $(thisId + " .tabs li a").each(
                    function()
                    {
                        var tabToHide = $(this).attr('href').substr(1);

                        $("#" + tabToHide).addClass('easytabs-tab-content');
                    }
                );

                hideAll();
                changeContent(defaultTab);

                /**
                 *
                 */
                function hideAll()
                {
                    $(thisId + " .easytabs-tab-content").hide();
                }

                /**
                 *
                 */
                function changeContent(tabId)
                {
                    hideAll();

                    $(thisId + " .tabs li").removeClass(param.activeClass);
                    $(thisId + " .tabs li a[href=#" + tabId + "]").closest('li').addClass(param.activeClass);

                    if (param.fadeSpeed != "none")
                    {
                        $(thisId + " #" + tabId).fadeIn(param.fadeSpeed);
                    } else
                    {
                        $(thisId + " #" + tabId).show();
                    }
                }

                $(thisId + " .tabs li").click(
                    function()
                    {
                        var tabId = $(this).find('a').attr('href').substr(1);

                        changeContent(tabId);

                        return false;
                    }
                );
            }
        );
    }
})(jQuery);
